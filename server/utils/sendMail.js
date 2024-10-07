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
      user: process.env.HOST_MAIL,
      pass: process.env.HOST_PASS,
    },
  });
  const mailOptions = {
    from: "no replay <noreply@gmail.com>",
    to: "Deepak <deepakpmk9600@gmail.com>",
    subject: subject,
    text: text,
    //   attachments: [
    //   {
    //     filename: "",
    //     // path: `../server/files/Resume.pdf`,
    //   },
    // ],
  };

  console.log("Message sent: %s", mailOptions.messageId);
  // 3) Actually send the email
  await transpoter.sendMail(mailOptions);
};

module.exports = sendEmail;
