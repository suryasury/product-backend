const mongoose = require("mongoose");
const { ProductSchema } = require("../products/products.model");

module.exports = mongoose.model(
  "Order",
  new mongoose.Schema(
    {
      userId: String,
      total: Number,
      orderStatus: {
        type: String,
        enum: [
          "pending_approval",
          "approved",
          "rejected",
          "cancelled",
          "shipped",
          "delivered",
        ],
        default: "pending_approval",
      },
      orderedItems: [
        {
          product: ProductSchema,
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);
