const StudentData = require("../model/studentDataModel");
const sendEmail = require("../utils/sendMail");

exports.sendEmailTo = async (req, res) => {
  const data = {
    email: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };
  sendEmail(data.email, data.subject, data.text);
  try {
    res.status(200).json({
      status: "Send success",
      message: `The email is send to deepakpmk@outlook.com`,
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err,
    });
  }
};
