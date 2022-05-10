const cron = require("node-cron");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: `${process.cwd()}/.env.local` });

// Create mail transporter.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.ETHEREAL_MAIL_USERNAME,
    pass: process.env.ETHEREAL_MAIL_PASSWORD,
  },
});

// Sending emails every Wednesday.
cron.schedule("0 0 * * 3", () => {
  console.log("------------------------------------------");
  console.log("Running Cron Job");

  let messageOptions = {
    from: process.env.ETHEREAL_MAIL_USERNAME,
    to: process.env.RECEIVER_EMAIL,
    subject: "Scheduled email",
    text: "Hi there. This email was automatically sent by us.",
  };

  transporter.sendMail(messageOptions, (error, info) => {
    if (error) throw error;
    else console.log("Email setn successfully!");
  });
});
