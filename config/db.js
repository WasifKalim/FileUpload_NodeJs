const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () => {
    mongoose.connect("mongodb+srv://wasif114222:81err3oqWIF4J44e@cluster0.p1utm.mongodb.net/fileupload", {
    })
    .then(console.log("DB Connected"))
    .catch((e)=>{
        console.log(e);
        process.exit(1);
    })
}