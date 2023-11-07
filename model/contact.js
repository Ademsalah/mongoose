const mongoose = require('mongoose')


const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    note:{type:String},
    typeuser:{
        type:String,
        default:"client"
    }

}) 

module.exports = mongoose.model('F1contactlist',contactSchema)