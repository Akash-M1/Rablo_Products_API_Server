const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error while connecting with db"));

db.once('open',()=>{
    console.log("Connection with db is successfull");
})

module.exports = db;