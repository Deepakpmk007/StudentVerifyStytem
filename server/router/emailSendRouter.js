const express = require("express");

const emailSendController = require("../controller/sendMailController");

const router = express.Router();

router.route("/").get(emailSendController.sendEmailTo);

module.exports = router;
