const express = require("express");

const applicantController = require("../controller/applicantDataController");

const router = express.Router();

router.route("/").get(applicantController.getAllApplicant);

module.exports = router;
