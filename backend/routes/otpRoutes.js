const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const OTP = require('../models/otpModel');

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'arjunsreedharan32@gmail.com',
      pass: 'rmnm sjlu tfqs nbaf',
    },
  });

  const mailOptions = {
    from: 'arjunsreedharan32@gmail.com',
    to: email,
    subject: 'MERN Exit Exam OTP',
    text: `Your OTP for the MERN App is ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    let arjunOtp = await OTP.findOne({ email });
    if (arjunOtp) {
      arjunOtp.otp = otp;
      await arjunOtp.save();
    } else {
      arjunOtp = new OTP({ email, otp });
      await arjunOtp.save();
    }
    res.status(200).send('OTP sent and saved to DB');
  } catch (error) {
    res.status(500).send('Error sending OTP');
  }
});

router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  try {
    const arjrecord = await OTP.findOne({ email, otp });
    if (arjrecord) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    res.status(500).send('Error verifying OTP');
  }
});

module.exports = router;
