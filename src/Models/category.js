const dbConnect = require('../Configs/dbConnect');

const categoryModel = {
    //CREATE METHOD
    postCategory: (body) => {
        return new Promise((resolve, reject) => {
            const { id, name } = body;
            let postQuery = "INSERT INTO category_table SET category_id=?, category_name=? ";

            dbConnect.query(postQuery, [id, name], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //READ METHOD
    getAllCategory: () => {
        return new Promise((resolve, reject) => {
            let getCategoryQuery = "Select * FROM category_table";
            dbConnect.query(getCategoryQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },
    getCategoryById: (params) => {
        return new Promise((resolve, reject) => {
            const { id } = params;
            let getCategoryQuery = "Select * FROM category_table WHERE category_id= ? ";
            dbConnect.query(getCategoryQuery, [id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },


    //UPDATE METHOD
    updateCategory: (body, params) => {
        return new Promise((resolve, reject) => {
            const { name } = body;
            const { id } = params;
            let updateQuery = "UPDATE category_table SET category_name=? WHERE category_id=?";
            dbConnect.query(updateQuery, [name, id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //DELETE METHOD
    deleteCategory: (params) => {
        return new Promise((resolve, reject) => {
            const { id } = params;
            let deleteQuery = "DELETE from category_table WHERE category_id=?";
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

module.exports = categoryModel;