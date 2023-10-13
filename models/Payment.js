const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    required: [true, "Please enter your email"],
    unique: [true, "Email already exists"],
    type: String,
  },
  amount: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isInternational:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Payment", paymentSchema);
