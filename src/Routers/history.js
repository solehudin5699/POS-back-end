const express = require('express');
const historyRouter = express.Router();
const historyController = require('../Controllers/history');

//Create method
historyRouter.post('/add', historyController.postHistory);

//Read method
historyRouter.get('/', historyController.getAllHistory);

//Update method
historyRouter.put('/update/:id', historyController.updateHistory);

//Delete method
historyRouter.delete('/delete/:id', historyController.deleteHistory);

//export
module.exports = historyRouter;