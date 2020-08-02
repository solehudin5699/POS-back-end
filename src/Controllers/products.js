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
    // getProductById: (req, res) => {
    //     productsModel.getProductById(req.params)
    //         .then((result) => {
    //             responseResult.getSuccess(res, result)
    //             // res.status(200).json(data)
    //         })
    //         .catch((error) => {
    //             responseResult.error(res, error)
    //         })
    // },
    searchProductByName: (req, res) => {
        productsModel.searchProductByName(req.query.name)
            .then((data) => {
                responseResult.searchSuccess(res, data);
            })
            .catch((error) => {
                responseResult.error(res, error);
            })
    },
    // searchProductByName: (req, res) => {
    //     productsModel.searchProductByName(req.query.name)
    //         .then((result) => {
    //             res.status(200).json(result);
    //             // res.json(result);
    //             // responseResult.getSuccess(res, result)
    //         })
    //         .catch((error) => {
    //             res.status(500).json(error)
    //         });
    // },

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