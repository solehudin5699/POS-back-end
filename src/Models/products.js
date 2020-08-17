const dbConnect = require("../Configs/dbConnect");

const productsModel = {
  //CREATE METHOD
  postProduct: (body) => {
    return new Promise((resolve, reject) => {
      const { id, name, price, stock, image, category_id } = body;
      let postQuery =
        "INSERT INTO products_table SET product_id=?, product_name=?, product_price=?,product_stock=?, product_image=?,category_id= ? ";
      dbConnect.query(
        postQuery,
        [id, name, price, stock, image, category_id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },
  addProduct: (file, body) => {
    return new Promise((resolve, reject) => {
      const { id, name, price, stock, category_id } = body;
      const imageURI = "http://localhost:1000/images/" + file.filename;
      let postQuery = `INSERT INTO products_table SET product_id=${id}, product_name='${name}', product_price=${price},product_stock=${stock},product_image='${imageURI}',category_id=${category_id}`;
      dbConnect.query(postQuery, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
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
      });
    });
  },

  sortProduct: (query) => {
    return new Promise((resolve, reject) => {
      let sortBased = query.sortBased;
      let sort = query.sort;
      let sortQuery = `SELECT products_table.product_id, products_table.product_name, products_table.product_price, products_table.product_stock, products_table.create_date, category_table.category_name FROM products_table JOIN category_table ON products_table.category_id=category_table.category_id ORDER BY products_table.${sortBased} ${sort}`;
      dbConnect.query(sortQuery, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  searchProductByName: (name) => {
    return new Promise((resolve, reject) => {
      let getProductsQuery = `SELECT * FROM products_table WHERE product_name LIKE '%${name}%'`;
      dbConnect.query(getProductsQuery, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  searchAndPaginate: (query) => {
    return new Promise((resolve, reject) => {
      const { name, sortBy, orderBy, page, limit } = query;
      offset = (page - 1) * limit;
      const queryString = `SELECT products_table.product_id, products_table.product_name, products_table.product_price, products_table.product_stock, products_table.create_date, category_table.category_name FROM products_table JOIN category_table ON products_table.category_id=category_table.category_id WHERE products_table.product_name LIKE '%${name}%' ORDER BY products_table.${sortBy} ${orderBy} LIMIT ${Number(
        limit
      )} OFFSET ${offset}`;
      dbConnect.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },

  //UPDATE METHOD
  updateProduct: (body, params) => {
    return new Promise((resolve, reject) => {
      const { name, price, stock, image, category_id } = body;
      const { id } = params;
      let updateQuery =
        "UPDATE products_table SET product_name=?, product_price=?, product_stock=?, product_image=?, category_id=? WHERE product_id=?";
      dbConnect.query(
        updateQuery,
        [name, price, stock, image, category_id, id],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
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
      });
    });
  },
};

module.exports = productsModel;
