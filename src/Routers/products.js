const express = require("express");
const productsRouter = express.Router();
const productsController = require("../Controllers/products");
const uploadController = require("../Helpers/Middleware/uploadFile");
const checkToken = require("../Helpers/Middleware/checkToken");

//Create method
//post with URL image
productsRouter.post("/post", productsController.postProduct);
//post with upload file
productsRouter.post(
  "/add",
  checkToken.allUsers,
  uploadController.singleUpload,
  productsController.addProduct
);

//Read method
productsRouter.get("/", productsController.getAllProducts);
// productsRouter.get("/search", productsController.searchProductByName);
productsRouter.get("/sort", productsController.sortProduct);
productsRouter.get("/search", productsController.searchAndPaginate);

//Update method
// productsRouter.put("/update/:id", productsController.updateProduct);
productsRouter.patch(
  "/update/:id",
  uploadController.singleUpload,
  productsController.updateProduct
);

//Delete method
productsRouter.delete(
  "/delete/:id",
  checkToken.adminOnly,
  productsController.deleteProduct
);

//export
module.exports = productsRouter;
