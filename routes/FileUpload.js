const express = require("express");
const { localFileUpload } = require("../controller/fileUpload");
const router = express.Router();



router.post("/localFileUpload", localFileUpload);

module.express = router;