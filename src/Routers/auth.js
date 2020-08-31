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
authRouter.post("/login", authController.login);
authRouter.post("/validate", checkToken.allUsers, (req, res) => {
  res.json({ status:200,token: true });
});

module.exports = authRouter;
