const { upload, download } = require("./files.controller");

const { uploads } = require("../../utils/fileUpload");

const express = require("express");

const router = express.Router();

router.post("/upload", uploads.single("file"), upload);
router.get("/download/:fileName", download);

module.exports = router;
