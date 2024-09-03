// const File = require('../model/File');

exports.localFileUpload =async(req,res)=>{
    try {
        const file = req.files.file;
        let path = __dirname + "/uploads/" +  Date.now() + `${file.name.split(".")[1]}`;
        file.mv(path, (e)=>{
            console.log(e);
        });

        res.json({
            status: 200,
            message: "File uploaded"
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: 500,
            message: error.message
        })
    }
}