const productsModel = require('../Models/products');
const responseResult = require('../Helpers/formResponse');

const productsController = {
    //CREATE METHOD
    postProduct: (req, res) => {
        productsModel.postProduct(req.body)
            .then((result) => {
                responseResult.postSuccess(res, result, req.body)
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    },
    //READ METHOD
    getAllProducts: (_, res) => {
        productsModel.getAllProducts()
            .then((result) => {
                responseResult.getSuccess(res, result)
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    },

    searchProductByName: (req, res) => {
        productsModel.searchProductByName(req.query.name)
            .then((result) => {
                responseResult.searchSuccess(res, result);
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    },
    showProductSorted: (_, res) => {
        productsModel.showProductSorted()
            .then((result) => {
                responseResult.getSuccess(res, result);
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    },
    //UPDATE METHOD
    updateProduct: (req, res) => {
        productsModel.updateProduct(req.body, req.params)
            .then((result) => {
                // res.json(result)
                responseResult.updateSuccess(res, result);
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    },
    //DELETE METHOD
    deleteProduct: (req, res) => {
        productsModel.deleteProduct(req.params)
            .then((result) => {
                // res.json(result);
                responseResult.deleteSuccess(res, result)
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    }
};
module.exports = productsController;