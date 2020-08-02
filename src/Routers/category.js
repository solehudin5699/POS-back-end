const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../Controllers/category');

//Create method
categoryRouter.post('/add', categoryController.postCategory);

//Read method
categoryRouter.get('/', categoryController.getAllCategory);
categoryRouter.get('/:id', categoryController.getCategoryById);

//Update method
categoryRouter.put('/update/:id', categoryController.updateCategory);

//Delete method
categoryRouter.delete('/delete/:id', categoryController.deleteCategory);

//export
module.exports = categoryRouter;