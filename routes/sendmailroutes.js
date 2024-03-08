const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controller/sendmailcontroller.js");

router.post("/sendEmail", sendEmail);

module.exports = router;