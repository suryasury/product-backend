const express = require("express")

const mongoose = require("mongoose")

require("dotenv").config()

const main = async () => {
    const app = express()

    const cors = require("cors");

    var corsOptions = {
        origin: "http://localhost:3001",
    };
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    await mongoose.connect(process.env.DATABASE_URL)
    console.log("Connected")

    app.use("/api/products", require("./api/products/products.routes"))

    app.listen(process.env.PORT || 3000, () => console.log("Server running on port 3001"))
}
main()