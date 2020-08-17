const orderModel = require('../Models/order');

const orderController = {
    //CREATE METHOD
    postOrder: (req, res) => {
        orderModel.postOrder(req.body)
            .then((result) => {
                res.status(200).json(result)
                // responseResult.postSuccess(res, result, req.body)
            })
            .catch((error) => {
                res.status(500).json(error)
                // responseResult.error(res, error);
            })
    },
};
module.exports = orderController;