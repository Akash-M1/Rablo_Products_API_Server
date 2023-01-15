const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://akashm1:Akash123@cluster0.10pelru.mongodb.net/rablo_products_db");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting with db"));

db.once('open',()=>{
    console.log("Connection with db is successfull");
})

module.exports = db;