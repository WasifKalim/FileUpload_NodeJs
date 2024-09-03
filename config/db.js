const mongoose = require('mongoose');

require('dotenv').config();
let url = process.env.MONGODB_URL;
exports.connect = () => {
    mongoose.connect(url)
    .then(console.log("DB Connected"))
    .catch((e)=>{
        console.log(e);
        process.exit(1);
    })
}