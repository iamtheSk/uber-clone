const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const BlackListTokenModel = require("../models/blacklistToken.model");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({ errors: ["User already exist"] });
  }

  const hashedPassword = await userModel.hashPassword(password);

  try {
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(200).json({ token, user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  // From user email along take password
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  // set Production Level cookies
  res.cookie("token", token);

  res.status(200).json({ token, user });
};

module.exports.getProfile = async (req, res, next) => {
  const user = req.user;

  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blacklistTokenModel.create({
    token,
  });

  // if (!token) {
  //   return res.status(401).json({ error: "No token provided" });
  // }

  res.status(200).json({ message: "Logged out successfully" });
};
