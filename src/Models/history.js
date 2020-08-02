const dbConnect = require('../Configs/dbConnect');

const historyModel = {
    //CREATE METHOD
    postHistory: (body) => {
        return new Promise((resolve, reject) => {
            const { invoices, cashier, product_id, quantity, amount } = body;
            let postQuery = "INSERT INTO history_table SET invoices=?, cashier=?, product_id=?,quantity=?, amount=?";

            dbConnect.query(postQuery, [invoices, cashier, product_id, quantity, amount], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //READ METHOD
    getAllHistory: () => {
        return new Promise((resolve, reject) => {
            let getHistoryQuery = "Select * FROM history_table";
            dbConnect.query(getHistoryQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //UPDATE METHOD
    updateHistory: (body, params) => {
        return new Promise((resolve, reject) => {
            const { invoices, cashier, product_id, quantity, amount } = body;
            const { id } = params;
            let updateQuery = "UPDATE history_table SET invoices=?, cashier=?, product_id=?,quantity=?, amount=? WHERE order_id=?";
            dbConnect.query(updateQuery, [invoices, cashier, product_id, quantity, amount, id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //DELETE METHOD
    deleteHistory: (params) => {
        return new Promise((resolve, reject) => {
            const { id } = params;
            let deleteQuery = "DELETE from history_table WHERE order_id=?";
            dbConnect.query(deleteQuery, [id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    }
};

module.exports = historyModel;