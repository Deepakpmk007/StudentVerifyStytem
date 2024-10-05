const express = require("express");

const studentController = require("../controller/studentDataController");

const router = express.Router();

router
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.createStudent);
router.route("/:id").get(studentController.getStudent);

module.exports = router;
