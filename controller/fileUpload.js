const File = require('../model/File');

exports.localFileUpload =async(req,res)=>{
    try {
        const file = req.files.file;
        console.log(file);
        
        let path = __dirname + "/uploads/" +  Date.now() + `.${file.name.split(".")[1]}`;
        console.log(path);
        
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

exports.atlasUpload = async(req,res)=>{
    try {
        const file = req.files.file;
        
        let path = __dirname + "/uploads/" +  Date.now() + `.${file.name.split(".")[1]}`;
        
        file.mv(path, (e)=>{
            console.log(e);
        });

        let response = await File.create({imageUrl: path})
        if(response){
            return res.json({
                status: 200,
                message: "File uploaded"
            })
        }
        return res.json({
            status:400,
            message: "Upload Error"
        })

    } catch (error) {
        console.log(error)
        return res.json({
            status: 500,
            message: error.message
        })
    }
}