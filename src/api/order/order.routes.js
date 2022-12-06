const {
  placeOrderController,
  updateOrderStatusController,
} = require("./order.controller");

const express = require("express");

const router = express.Router();

router.get("/placeOrder/:userId", placeOrderController);
router.put("/updateOrderStatus", updateOrderStatusController);
// router.get("/:userId");

module.exports = router;
