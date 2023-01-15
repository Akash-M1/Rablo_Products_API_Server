//Importing All the required Frameworks and Libraries
const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const dotenv = require('dotenv');

const app=express();
dotenv.config();

//Importing all the required Files and Modules
const routes = require("./routes/index");
const db = require('./lib/db');


//Using Different middelwares
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',routes);

//Listening to the requests from the users at the given port
app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in listening");
    }
    else{
        console.log(`Successfully Listening on Port ${PORT}`);
    }
})
