const Order = require("./order.model");
const placeOrder = async (orderItems, userId, status, cartTotal) => {
  let result = await new Order({
    userId: userId,
    orderedItems: orderItems,
    orderStatus: status,
    total: cartTotal,
  }).save();
  return result;
};

const updateOrderStatus = (orderId, orderStatus) => {
  let result = {};
};

module.exports = { placeOrder, updateOrderStatus };
