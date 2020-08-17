const express = require("express");
const orderRouter = express.Router();
const orderController = require("../Controllers/order");

//Create method
orderRouter.post("/add", orderController.postOrder);

//export
module.exports = orderRouter;
