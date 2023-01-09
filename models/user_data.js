const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    email: {
        type:String,
        required:true
    },
})

const user_Model = mongoose.model('users', user_schema)
module.exports = user_Model