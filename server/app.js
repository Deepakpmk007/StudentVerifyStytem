const express = require("express");
const morgan = require("morgan");
const app = express();
const multer = require("multer");

const studentRoute = require("./router/studentDataRoute");
const applicantRoute = require("./router/applicantDataRouter");
// const AppError = require("./utils/AppError");

app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the middleware🔥");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/student", studentRoute);
app.use("api/v1/applicant", applicantRoute);

app.all("*", (req, res, next) => {
  "";
});

module.exports = app;
