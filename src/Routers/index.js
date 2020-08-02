//Package import
const express = require('express');
//Filepath import
const productsRouter = require('./products');
const categoryRouter = require('./category');
const historyRouter = require('./history');
//Declaration
const indexRouter = express.Router();

//Implementation
indexRouter.use('/products', productsRouter);
indexRouter.use('/category', categoryRouter);
indexRouter.use('/history', historyRouter);

//Export
module.exports = indexRouter;