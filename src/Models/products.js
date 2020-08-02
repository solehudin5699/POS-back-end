const dbConnect = require('../Configs/dbConnect');

const productsModel = {
    //CREATE METHOD
    postProduct: (body) => {
        return new Promise((resolve, reject) => {
            const { id, name, price, stock, image, category_id } = body;
            let postQuery = "INSERT INTO products_table SET product_id=?, product_name=?, product_price=?,product_stock=?, product_image=?,category_id= ? ";

            dbConnect.query(postQuery, [id, name, price, stock, image, category_id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //READ METHOD
    getAllProducts: () => {
        return new Promise((resolve, reject) => {
            let getProductsQuery = "Select * FROM products_table";
            dbConnect.query(getProductsQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },
    // getProductById: (params) => {
    //     return new Promise((resolve, reject) => {
    //         const { id } = params;
    //         let getProductsQuery = "Select * FROM products_table WHERE category_id= ? ";
    //         dbConnect.query(getProductsQuery, [id], (error, result) => {
    //             if (!error) {
    //                 resolve(result);
    //             } else {
    //                 reject(error);
    //             }
    //         })
    //     })
    // },
    searchProductByName: (data) => {
        return new Promise((resolve, reject) => {
            let getProductsQuery = `SELECT * FROM products_table WHERE product_name LIKE '%${data}%'`;
            dbConnect.query(getProductsQuery, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //UPDATE METHOD
    updateProduct: (body, params) => {
        return new Promise((resolve, reject) => {
            const { name, price, category_id } = body;
            const { id } = params;
            let updateQuery = "UPDATE products_table SET product_name=?, product_price=?, category_id=? WHERE product_id=?";
            dbConnect.query(updateQuery, [name, price, category_id, id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(error);
                }
            })
        })
    },

    //DELETE METHOD
    deleteProduct: (params) => {
        return new Promise((resolve, reject) => {
            const { id } = params;
            let deleteQuery = "DELETE from products_table WHERE product_id=?";
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

module.exports = productsModel;