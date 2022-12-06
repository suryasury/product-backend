const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Cart",
  new mongoose.Schema(
    {
      userId: String,
      tax: Number,
      total: Number,
      cartItems: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          count: Number,
        },
      ],
    },
    {
      timestamps: true,
    }
  )
);
