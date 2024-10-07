const nodemailer = require("nodemailer");

// 2) Define the email options
const sendEmail = async function ({ email, subject, text }) {
  // 1) Create a transporter
  const transpoter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "deepakpmk9600@gmail.com",
      pass: "kxdc kbbh rzln wdyw",
    },
  });
  const mailOptions = {
    from: "no replay <noreply@gmail.com>",
    to: "Deepak <deepakpmk9600@gmail.com>",
    subject: subject,
    text: text,
  };

  console.log("Message sent: %s", mailOptions.messageId);
  // 3) Actually send the email
  await transpoter.sendMail(mailOptions);
};

module.exports = sendEmail;
