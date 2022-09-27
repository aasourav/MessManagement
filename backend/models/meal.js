const mongoose  = require('mongoose')
const meal = mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
    },
    sourav:{
        type:String,
        required: true
    },
    mannan:{
        type:String,
        required: true
    },
    arif:{
        type:String,
        required: true
    }
})
module.exports = meal;