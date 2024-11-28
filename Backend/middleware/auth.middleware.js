const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// This middleware Check token is valid or not and decode and verify using jwt , then return verfied user

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "UnAuthorized" });
  }

  const isBlacklisted = await userModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ error: "UnAuthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
