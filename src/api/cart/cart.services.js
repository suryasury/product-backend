const Cart = require("./cart.model");

const addProductsToCart = async (product, userId) => {
  let userCart = await Cart.find({ userId: userId });
  if (userCart) {
    var newCart = new Cart({
      userId: userId,
      total: product.price,
      cartItems: [
        {
          product: product._id,
          count: product.count,
        },
      ],
    }).save();
    return newCart;
  } else {
    const cartItems = await Cart.findOne({
      "cartItems.product": product._id,
      userId,
    });
    if (cartItems) {
      let updateRes = await Cart.updateOne(
        { userId: userId, "cartItems.product": product._id },
        { $set: { "cartItems.$.count": product.count } }
      );
      return updateRes;
    } else {
      let updateRes = await Cart.findOneAndUpdate(
        { userId: userId },
        {
          $push: {
            cartItems: {
              productId: product._id,
              count: product.count,
            },
          },
        },
        { new: true }
      );
      return updateRes;
    }
  }
};

const findCart = (userId) => {
  return Cart.find({ userId }).populate("cartItems.product");
};

const removeProductsFromCart = () => {};

const updateProductCount = () => {};

const deleteCart = (userId) => {
  return Cart.findOneAndDelete({ userId });
};

module.exports = {
  addProductsToCart,
  removeProductsFromCart,
  updateProductCount,
  findCart,
  deleteCart,
};
