const dbConnect = require("../Configs/dbConnect");

const orderModel = {
  //CREATE METHOD
  postOrder: (body) => {
    return new Promise((resolve, reject) => {
      const { product_order, quality_order, total_price } = body;
      let postQuery =
        "INSERT INTO order_table SET product_order=?, quality_order=?, total_price=?";
      dbConnect.query(
        postQuery,
        [product_order, quality_order, total_price],
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
};

module.exports = orderModel;
