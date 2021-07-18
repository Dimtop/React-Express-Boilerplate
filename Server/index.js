//Libraries
const path = require("path");
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//Middlewares
const dbConnect = require('./Middlewares/dbConnect');

//Initiallizing the app
const app = express();

//Configurations
dotenv.config();

//Middleware configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(fileUpload());

//Static files
//app.use(express.static("Media"));
//app.use(express.static("Public"));
//Client serving

/*app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Public","index.html"))
})*/


//Initializing the server
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Running on: " +process.env.PORT)
        dbConnect(process.env.DB_URI);
    }
})
