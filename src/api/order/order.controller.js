const cartModel = require("../cart/cart.model");
const { placeOrder, updateOrderStatus } = require("./order.services");
const { deleteCart } = require("../cart/cart.services");

const placeOrderController = async (req, res) => {
  let cart = await cartModel
    .findOne({ userId: req.params.userId })
    .populate("cartItems.product");

  if (!cart) {
    return res.send({
      message: "Cart not found",
    });
  }
  let cartTotal = 0;

  cart.cartItems.forEach((data) => {
    cartTotal += data.count * data.product.price;
  });

  let order = await placeOrder(
    cart.cartItems,
    req.params.userId,
    "pending_approval",
    cartTotal
  );
  await deleteCart(req.params.userId);
  res.send(order);
};

const updateOrderStatusController = async (req, res) => {
  let result = await updateOrderStatus(req.query.orderId, req.query.status);
  res.send(res);
};

module.exports = { placeOrderController, updateOrderStatusController };
