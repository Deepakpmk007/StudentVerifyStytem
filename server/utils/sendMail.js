const nodemailer = require("nodemailer");

// 1) Create a transporter
const transpoter = nodemailer.createTransport({
  service: "gmail",
  host: "smpt.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "deepakpmk9600@gmail.com",
    pass: "kxdc kbbh rzln wdyw",
  },
});
// 2) Define the email options
const sendEmail = async function ({ email, subject, text }) {
  const mailOptions = await transpoter.sendMail({
    from: email,
    to: "Deepak <deepakpmk9600@gmail.com>",
    subject: subject,
    text: text,
  });
  console.log("Message sent: %s", mailOptions.messageId);
};
// 3) Actually send the email

module.exports = sendEmail;
