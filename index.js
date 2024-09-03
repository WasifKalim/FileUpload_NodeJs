// app create
const express = require("express");
const app = express();

// port
require("dotenv").config();
const PORT = process.env.PORT || 3000;


// middleware add
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());


// db connect
const db = require("./config/db");
db.connect();


// cloud connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();


// api route 
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);


// activate server
app.listen(PORT, ()=>{
    console.log(`Sever on ${PORT}`);
})
