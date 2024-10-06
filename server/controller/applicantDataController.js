const ApplicantData = require("../model/applicantDataModel");

exports.getAllApplicant = async (req, res) => {
  const applicants = await ApplicantData.find();
  try {
    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      results: applicants.length,
      data: {
        applicants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "",
    });
  }
};

exports.getApplicant = async (req, res) => {
  const applicants = await ApplicantData.find({ name: req.params.name });
  try {
    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      results: applicants.length,
      data: {
        applicants,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "",
    });
  }
};

exports.createApplicant = async (req, res) => {
  const newApplicant = await ApplicantData.create(req.body);
  try {
    res.status(200).json({
      status: "success",
      data: {
        newApplicant,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "",
    });
  }
};
