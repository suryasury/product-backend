const express = require("express");

const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

const main = async () => {
  const app = express();

  const cors = require("cors");

  app.use(morgan("tiny")); //for req logging

  var corsOptions = {
    origin: "http://localhost:3001",
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Connected");

  app.use("/api/products", require("./api/products/products.routes"));
  app.use("/api/cart", require("./api/cart/cart.routes"));
  app.use("/api/order", require("./api/order/order.routes"));
  app.use("/api/files", require("./api/files/files.routes"));
  app.use("/api/users", require("./api/user/user.routes"));

  app.listen(process.env.PORT || 3001, () =>
    console.log("Server running on port 3001")
  );
};
main();
