const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
  try {
    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to other services like 'SendGrid', 'Outlook', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"Quiz Platform" <${process.env.EMAIL_USER}>`, // Sender address
      to, // Receiver email
      subject, // Subject of the email
      html: htmlContent, // HTML content of the email
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email: ", error);
    return { success: false, error };
  }
};

module.exports = { sendEmail };
