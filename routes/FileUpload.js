const express = require("express");
const router = express.Router();
const { localFileUpload, atlasUpload } = require("../controller/fileUpload");




router.post("/localFileUpload", localFileUpload);

router.post("/atlasupload", atlasUpload);

module.exports= router;