const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  contact_number: { type: String, required: true },
  address: { type: String, required: true },
});

module.exports = mongoose.model("user", User);
