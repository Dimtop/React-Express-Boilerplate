
//Libraries
const path = require("path");
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");





//Initializing the server
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on: " + process.env.PORT);
        dbConnect(process.env.DB_URI);
     
    }
})