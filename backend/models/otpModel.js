const mongoose = require('mongoose');

const arjunSchema = new mongoose.Schema({
  email: String,
  otp: String,
});

module.exports = mongoose.model('otp', arjunSchema);
