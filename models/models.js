const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    date: {
        require: true,
        type: String
    },
    from: {
        require: true,
        type: Number
    },
    to: {
        require: true,
        type: Number
    },
    amount: {
        require: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
