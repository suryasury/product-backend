const {
  addProductsToCartController,
  removeProductsFromCartController,
  updateProductsCountController,
  findUserCartController,
} = require("./cart.controller");
const { verifyToken } = require("../../utils/authenticate");
const express = require("express");

const router = express.Router();

router.post("/addProductToCart", verifyToken, addProductsToCartController);
router.post("/removeProductFromCart", removeProductsFromCartController);
router.post("/updateProductCount", updateProductsCountController);
router.get("/:userId", verifyToken, findUserCartController);

module.exports = router;
