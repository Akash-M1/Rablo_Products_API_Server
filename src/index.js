const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const dotenv = require('dotenv');

const app=express();
dotenv.config();

const routes = require("./routes/index");
const db = require('./lib/db');



const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',routes);

app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in listening");
    }
    else{
        console.log(`Successfully Listening on Port ${PORT}`);
    }
})
