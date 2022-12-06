const { addProductsToCart, findCart } = require("./cart.services");

const addProductsToCartController = async (req, res) => {
  console.log("req", req.body);
  let result = await addProductsToCart(req.body.product, req.body.userId);
  res.send(result);
};

const removeProductsFromCartController = () => {};

const updateProductsCountController = () => {};

const findUserCartController = async (req, res) => {
  res.send(await findCart(req.params.userId));
};

module.exports = {
  addProductsToCartController,
  removeProductsFromCartController,
  updateProductsCountController,
  findUserCartController,
};
