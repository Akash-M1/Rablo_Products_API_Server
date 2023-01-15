const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    prod_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean
    },
    rating:{
        type:"Decimal128",
    },
    createdAt:{
        type:Date,
        required:true
    },
    company:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('products',productsSchema);