const historyModel = require('../Models/history');

const historyController = {
    //CREATE METHOD
    postHistory: (req, res) => {
        historyModel.postHistory(req.body)
            .then((result) => {
                res.status(200).json(result)
                // responseResult.postSuccess(res, result, req.body)
            })
            .catch((error) => {
                res.status(500).json(error)
                // responseResult.error(res, error);
            })
    },
    //READ METHOD
    getAllHistory: (_, res) => {
        historyModel.getAllHistory()
            .then((result) => {
                res.status(200).json(result)
                // responseResult.getSuccess(res, result)
            })
            .catch((error) => {
                res.status(500).json(error)
                // responseResult.error(res, error);
            })
    },

    //UPDATE METHOD
    updateHistory: (req, res) => {
        historyModel.updateHistory(req.body, req.params)
            .then((result) => {
                res.status(200).json(result)
                // res.json(result)
                // responseResult.updateSuccess(res, result);
            })
            .catch((error) => {
                res.status(500).json(error)
                // responseResult.error(res, error);
            })
    },
    //DELETE METHOD
    deleteHistory: (req, res) => {
        historyModel.deleteHistory(req.params)
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((error) => {
                res.status(500).json(error)
                // responseResult.error(res, error);
            })
    }
};
module.exports = historyController;