const multer = require("multer");

const path = require("path");

const uuid = require("uuid");

const UPLOAD_DIRECTORY = "uploads";

const storage = multer.diskStorage({
  destination: UPLOAD_DIRECTORY,
  filename: (req, file, cb) => {
    cb(null, uuid.v4() + path.extname(file.originalname));
  },
});

const uploads = multer({ storage });

module.exports = { uploads, UPLOAD_DIRECTORY };
