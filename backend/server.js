const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const twilio = require("twilio");

const app = express();
const port = 3000;

const accountSid = 'AC0db51e76b7ec8d627f638f76cb660c7b'; // Your Account SID from www.twilio.com/console
const authToken = 'your_twilio_auth_token';   // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

app.use(bodyParser.json());
app.use(cors());

let otpStore = {}; // To store OTPs temporarily

// Endpoint to send OTP
app.post("/send-otp", (req, res) => {
  const { phoneNumber } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

  otpStore[phoneNumber] = otp;

  client.messages.create({
    body: `Your OTP is ${otp}`,
    to: phoneNumber,  // Text this number
    from: '+1234567890' // From a valid Twilio number
  })
  .then((message) => {
    console.log("OTP sent:", otp);
    res.status(200).send("OTP sent successfully.");
  })
  .catch((error) => {
    console.error("Error sending OTP:", error);
    res.status(500).send("Error sending OTP.");
  });
});

// Endpoint to verify OTP
app.post("/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (otpStore[phoneNumber] == otp) {
    delete otpStore[phoneNumber]; // OTP verified, delete from store
    res.status(200).send("OTP verified successfully.");
  } else {
    res.status(400).send("Invalid OTP.");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
