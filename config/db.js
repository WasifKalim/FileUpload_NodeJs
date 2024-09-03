const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB Connected"))
    .catch((e)=>{
        console.log("BD Error");
        process.exit(1);
    })
}