const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connecToDB = require("./db/db");

connecToDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const userRoutes = require("./routes/user.routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", userRoutes);

module.exports = app;
