// const nodemailer = require("nodemailer");
// const path = require("path");
// const { createClient } = require("@supabase/supabase-js");

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_ANON_KEY
// );
// const BUCKET_NAME = process.env.SUPABASE_BUCKET;

// async function getFileFromSupabase(filePath) {
//   const { publicURL, error } = supabase.storage
//     .from(BUCKET_NAME) // Replace with your Supabase bucket name
//     .getPublicUrl(filePath); // Get the public URL of the file

//   if (error) {
//     console.error("Error generating public URL from Supabase:", error);
//     throw new Error("Failed to generate public URL");
//   }

//   return publicURL; // This returns a ReadableStream (file buffer)
// }

// const transpoter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.HOST_MAIL,
//     pass: process.env.HOST_PASS,
//   },
// });
// // 2) Define the email options
// const sendEmail = async function (req) {
//   const filePaths = req.file;
//   console.log(filePaths);
//   const { subject, emailText, email } = req;
//   const attachments = [];
//   const fileUrls = [];

//   if (filePaths && filePaths.length > 0) {
//     for (const filePath of filePaths) {
//       const { fileName, publicUrl } = await getFileUrlWithName(filePath);
//       fileUrls.push({ fileName, publicUrl });
//     }
//   }

//   attachments.push({
//     filename: "output.pdf", // Name for the default file
//     path: `./out/output.pdf`, // Path to the default file
//   });

//   // 1) Create a transporter

//   const mailOptions = {
//     from: "deepakpmk9600@gmail.com",
//     to: "Deepak <deepakpmk007@gmail.com>",
//     subject: subject,
//     html: `
//       <h1>The sender Mail ${email}</h1>
//       <h1>${emailText}</h1>
//        <ul>
//         ${fileUrls
//           .map(
//             (detail) =>
//               `<li>${detail.fileName}: <a href="${detail.publicUrl}">${detail.publicUrl}</a></li>`
//           )
//           .join("")}
//       </ul>
//       <p>It is email to request the identifier data</p>
//     `,
//     attachments: attachments,
//   };

//   console.log("Message sent: %s", mailOptions.messageId);
//   // 3) Actually send the email
//   await transpoter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
const nodemailer = require("nodemailer");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
const BUCKET_NAME = process.env.SUPABASE_BUCKET;

async function getFileUrl(fileName) {
  try {
    // Construct the file path
    const filePath = fileName;

    // Generate the public URL
    const { publicURL, error } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    if (error) {
      console.error("Error generating public URL:", error);
      throw new Error("Failed to generate public URL");
    }
    console.log(publicURL);

    return publicURL; // Return the generated public URL
  } catch (error) {
    console.error("Error in getPublicUrlByFileName:", error.message);
    throw error;
  }
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.HOST_MAIL,
    pass: process.env.HOST_PASS,
  },
});

const sendEmail = async function (req) {
  const filePaths = req.body.filePaths; // Handle multiple files (if using multer, req.files)
  console.log("Received file paths:", filePaths);

  const { subject, emailText, email } = req.body;
  const fileUrls = [];
  const attachments = [];

  if (filePaths && filePaths.length > 0) {
    for (const filePath of filePaths) {
      try {
        const publicUrl = await getFileUrl(filePath);
        // const fileName = filePath.split("/").pop(); // Extract file name
        fileUrls.push(publicUrl);
      } catch (error) {
        console.error("Error fetching file URL:", error);
      }
    }
  }

  const mailOptions = {
    from: "deepakpmk9600@gmail.com",
    to: "Deepak <deepakpmk007@gmail.com>",
    subject: subject,
    html: `
      <h1>Sender's Email: ${email}</h1>
      <h2>${emailText}</h2>
      <p>Here are the requested files:</p>
      <ul>
        ${filePaths
          .map(
            (fileName) =>
              `<li><a href="https://pvixsukqosxgzqfpvnvs.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${fileName}" target="_blank">${fileName}</a></li>`
          )
          .join("")}
      </ul>
    `,
    attachments: {
      filename: "output.pdf", // Name for the default file
      path: `./out/output.pdf`, // Path to the default file
    },
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
