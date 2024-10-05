const StudentData = require("../model/studentDataModel");

exports.getAllStudent = async (req, res) => {
  const students = await StudentData.find();
  console.log(req.requestTime);
  try {
    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      results: students.length,
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "",
    });
  }
};

exports.getStudent = async (req, res) => {
  const student = await StudentData.find({ name: req.params.id });
  try {
    res.status(200).json({
      status: "success",
      results: student.length,
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "",
    });
  }
};

exports.createStudent = async (req, res) => {
  const newStudent = await StudentData.create(req.body);
  try {
    res.status(201).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (err) {
    {
      res.status(404).json({
        status: "fail",
        message: "",
      });
    }
  }
};
