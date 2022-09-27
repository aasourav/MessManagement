const mongoose = require('mongoose');
const Expense = new mongoose.Schema({
    date:{
        type:Date,
        default: Date.now
    },
    name:{
        type:String,
        required: true
    },
    amount:{
        type:String,
        required: true
    }
});

module.exports = Expense