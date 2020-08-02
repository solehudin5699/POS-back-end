const categoryModel = require('../Models/category');

const categoryController = {
    //CREATE METHOD
    postCategory: (req, res) => {
        categoryModel.postCategory(req.body)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json(error)
            });
    },
    //READ METHOD
    getAllCategory: (_, res) => {
        categoryModel.getAllCategory()
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json(error)
            });
    },
    getCategoryById: (req, res) => {
        categoryModel.getCategoryById(req.params)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json(error)
            })
    },



    //UPDATE METHOD
    updateCategory: (req, res) => {
        categoryModel.updateCategory(req.body, req.params)
            .then((result) => {
                // res.json(result)
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json(error)
            })
    },
    //DELETE METHOD
    deleteCategory: (req, res) => {
        categoryModel.deleteCategory(req.params)
            .then((result) => {
                // res.json(result);
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json(error)
            })
    }
};
module.exports = categoryController;