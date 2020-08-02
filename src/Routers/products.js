const express = require('express');
const productsRouter = express.Router();
const productsController = require('../Controllers/products');

//Create method
productsRouter.post('/add', productsController.postProduct);

//Read method
productsRouter.get('/', productsController.getAllProducts);
// productsRouter.get('/:id', productsController.getProductById);
productsRouter.get('/search', productsController.searchProductByName);


//Update method
productsRouter.put('/update/:id', productsController.updateProduct);

//Delete method
productsRouter.delete('/delete/:id', productsController.deleteProduct);

//export
module.exports = productsRouter;
