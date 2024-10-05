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
