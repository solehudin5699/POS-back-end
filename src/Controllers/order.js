const orderModel = require("../Models/order");
const responseResult = require("../Helpers/formResponse");

const orderController = {
  //CREATE METHOD
  postOrder: (req, res) => {
    orderModel
      .postOrder(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //GET METHOD
  getAllOrder: (req, res) => {
    orderModel
      .getAllOrder()
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
};
module.exports = orderController;
