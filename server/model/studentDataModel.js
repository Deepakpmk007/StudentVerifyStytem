const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
  uniqueId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Name must to be enter."],
    unique: false,
    trim: true,
    validate: [validator.isAlpha, "Please provide a valid Name"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of Birth must to be enter."],
  },
  regNo: {
    type: Number,
    required: [true, "A reg number must be enter"],
    unique: true,
    trim: true,
  },
  drgree: {
    type: String,
    default: "B.E",
  },
  Branch: {
    type: String,
    enum: [
      "Computer Science Engineering",
      "Electrical and Electronics Engineering",
      "Electronics and Communication Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
    ],
    default: "Computer Science Engineering",
  },

  nameOfTheInstitution: {
    type: String,
    default: "Government College of Engineering Srirangam",
  },
  University: {
    type: String,
    default: "Anna University",
  },
  yearOfPassing: {
    type: String,
    required: [true, "Year of Passing must to be enter."],
  },
  yearOfStudy: {
    type: String,
    required: [true, "Year of study must to be enter."],
  },
  CGPA: Number,
  classObtain: {
    type: String,
    required: [true, "class obtain must be enter."],
  },
  remark: {
    type: String,
    default: null,
    trim: true,
  },
  verifiedBY: String,
  applicantID: {
    type: mongoose.Schema.ObjectId,
    ref: "applicantData",
  },
});

const StudentData = mongoose.model("StudentData", studentSchema);

module.exports = StudentData;
