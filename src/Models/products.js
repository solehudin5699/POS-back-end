const dbConnect = require("../Configs/dbConnect");
const fs = require("fs");

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
  addProduct: (body) => {
    return new Promise((resolve, reject) => {
      const { name, price, product_image, category_id } = body;
      let postQuery = `INSERT INTO products_table SET product_name='${name}', product_price=${price},product_image='${product_image}',category_id=${category_id}`;
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
      const { name, price, time, page, limit, category } = query;
      const offset = (page - 1) * limit;
      const checkData = `SELECT * FROM products_table`;
      let queryString;
      if (category !== "") {
        queryString = `SELECT products_table.product_id, products_table.product_name, products_table.product_price, products_table.product_stock,products_table.product_image, products_table.create_date,products_table.category_id, category_table.category_name FROM products_table JOIN category_table ON products_table.category_id=category_table.category_id WHERE products_table.product_name LIKE '%${name}%' AND products_table.category_id=${category} ORDER BY products_table.product_price ${price}, products_table.product_id ${time} LIMIT ${Number(
          limit
        )} OFFSET ${offset}`;
      } else {
        queryString = `SELECT products_table.product_id, products_table.product_name, products_table.product_price, products_table.product_stock,products_table.product_image, products_table.create_date,products_table.category_id, category_table.category_name FROM products_table JOIN category_table ON products_table.category_id=category_table.category_id WHERE products_table.product_name LIKE '%${name}%' ORDER BY products_table.product_price ${price}, products_table.product_id ${time} LIMIT ${Number(
          limit
        )} OFFSET ${offset}`;
      }

      dbConnect.query(checkData, (err, dataAll) => {
        if (err) {
          reject(err);
        } else {
          dbConnect.query(queryString, (err, data) => {
            if (!err) {
              resolve({ dataAll, data });
            } else {
              reject(err);
            }
          });
        }
      });
    });
  },

  updateProduct: (body, params) => {
    return new Promise((resolve, reject) => {
      let imgDelete = body.imageDelete;
      delete body.imageDelete;
      const { id } = params;
      let updateQuery = `UPDATE products_table SET ? WHERE product_id=${id}`;
      dbConnect.query(updateQuery, body, (error, result) => {
        if (!error) {
          if (imgDelete) {
            try {
              fs.unlinkSync("public" + imgDelete);
              resolve({
                ...result,
                id,
                msg: "Success updating product",
                deleteOldImg: "Success",
              });
            } catch (err) {
              resolve({
                ...result,
                id,
                msg: "Success updating product",
                deleteOldImg: "Error",
              });
            }
          } else {
            resolve(result);
          }
        } else {
          reject({ msg: "Error updating product" });
        }
      });
    });
  },

  //DELETE METHOD
  deleteProduct: (params, body) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      let deleteQuery = "DELETE from products_table WHERE product_id=?";
      dbConnect.query(deleteQuery, [id], (error, result) => {
        if (!error) {
          try {
            fs.unlinkSync("public" + body.imageDelete);
            resolve({
              id,
              msg: "Success deleting product",
              deleteImgInServer: "Success",
            });
          } catch (err) {
            resolve({
              id,
              msg: "Success deleting product",
              deleteImgInServer: "Error",
            });
          }
        } else {
          reject({ msg: "Error" });
        }
      });
    });
  },
};

module.exports = productsModel;
