const express = require('express');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();

const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use(express.json());

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const Model = require('./models/models.js');

app.post("/add-users", (req, res) => {
    console.log(req.body)
    try {
        console.log(req.body)
        var res = Model.insertMany(req.body)
        res.send(res)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

app.get("/transactions", (req, res) => {
    console.log(req.body)
    try {
        var id = req.query.sortBy
        console.log(req.body)
        var res = Model.insertMany(req.body)
        res.send(res)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})