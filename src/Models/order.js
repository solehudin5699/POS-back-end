const dbConnect = require("../Configs/dbConnect");

const orderModel = {
  //CREATE METHOD
  postOrder: (body) => {
    return new Promise((resolve, reject) => {
      const {
        user,
        product_order,
        quality_order,
        total_price,
        invoices,
      } = body;
      let postQuery =
        "INSERT INTO order_table SET user_id=?, product_order=?, quality_order=?, total_price=?, invoices=?";
      dbConnect.query(
        postQuery,
        [user, product_order, quality_order, total_price, invoices],
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject({ msg: "Failed order." });
          }
        }
      );
    });
  },
  //GET METHOD
  getAllOrder: () => {
    return new Promise((resolve, reject) => {
      let getAllOrderQuery =
        "SELECT order_table.order_id, order_table.product_order,order_table.quality_order, order_table.total_price, order_table.order_date,order_table.invoices, users.name FROM order_table JOIN users ON order_table.user_id=users.user_id";
      dbConnect.query(getAllOrderQuery, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject({ msg: "Failed." });
        }
      });
    });
  },
};

module.exports = orderModel;
