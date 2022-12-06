const { loginController, signUpController } = require("./user.controller");

const express = require("express");

const router = express.Router();

router.post("/signup", signUpController);
router.post("/login", loginController);

module.exports = router;
