const productsModel = require("../Models/products");
const responseResult = require("../Helpers/formResponse");

const productsController = {
  //CREATE METHOD
  //Post with URL image
  postProduct: (req, res) => {
    productsModel
      .postProduct(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //post with upload file
  addProduct: (req, res) => {
    productsModel
      .addProduct(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //READ METHOD
  getAllProducts: (_, res) => {
    productsModel
      .getAllProducts()
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },

  searchProductByName: (req, res) => {
    productsModel
      .searchProductByName(req.query.name)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  searchAndPaginate: (req, res) => {
    productsModel
      .searchAndPaginate(req.query)
      .then((result) => {
        responseResult.paginationSucces(req, res, result);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  sortProduct: (req, res) => {
    productsModel
      .sortProduct(req.query)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //UPDATE METHOD
  // updateProduct: (req, res) => {
  //   productsModel
  //     .updateProduct(req.body, req.params)
  //     .then((result) => {
  //       if (result.affectedRows !== 0) {
  //         const updatedProduct = {
  //           ...req.body,
  //         };
  //         responseResult.updateSuccess(res, updatedProduct);
  //       } else {
  //         res.json({
  //           response: `product_id =${req.params.id} is not found`,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       responseResult.error(res, error);
  //     });
  // },
  updateProduct: (req, res) => {
    productsModel
      .updateProduct(req.body, req.params)
      .then((result) => {
        if (result.affectedRows !== 0) {
          const detailUpdate = {
            ...req.body,
          };
          console.log(result);
          responseResult.success(res, detailUpdate);
        } else {
          let msg = `product_id = ${req.params.id} is not found`;
          responseResult.error(res, { msg });
          // res.json({
          //   response: `product_id = ${req.params.id} is not found`,
          // });
        }
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //DELETE METHOD
  deleteProduct: (req, res) => {
    productsModel
      .deleteProduct(req.params, req.body)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
};
module.exports = productsController;
