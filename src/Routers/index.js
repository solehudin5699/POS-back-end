//Package import
const express = require("express");
//Filepath import
const productsRouter = require("./products");
const categoryRouter = require("./category");
const historyRouter = require("./history");
const orderRouter = require("./order");
const authRouter = require("./auth");
const checkToken = require("../Helpers/Middleware/checkToken");
//Declaration
const indexRouter = express.Router();

//Implementation
//PRIVATE ROUTE
indexRouter.use("/products", productsRouter);
// indexRouter.use("/category", checkToken.allUsers, categoryRouter);
// indexRouter.use("/history", checkToken.allUsers, historyRouter);
indexRouter.use("/order", checkToken.allUsers, orderRouter);

//PUBLIC ROUTE OR PRIVATE ROUTE
indexRouter.use("/auth", authRouter);

//Export
module.exports = indexRouter;
