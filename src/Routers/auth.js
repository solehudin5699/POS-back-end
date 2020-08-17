//Package import
const express = require("express");
const authRouter = express.Router();
//Filepath import
const authController = require("../Controllers/auth");
const checkToken = require("../Helpers/Middleware/checkToken");

//IMPLEMENTATION
//ADMIN ONLY
authRouter.post(
  "/registration",
  checkToken.adminOnly,
  authController.registration
);
//PUBLIC
authRouter.get("/login", authController.login);

module.exports = authRouter;
