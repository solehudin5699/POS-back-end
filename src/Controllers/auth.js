const authModel = require("../Models/auth");
const responResult = require("../Helpers/formResponse");
const responseResult = require("../Helpers/formResponse");

const authController = {
  registration: (req, res) => {
    authModel
      .registration(req.body)
      .then((data) => {
        responseResult.success(res, data);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((data) => {
        responResult.success(res, data);
      })
      .catch((err) => {
        responResult.error(res, err);
      });
  },
};

module.exports = authController;
