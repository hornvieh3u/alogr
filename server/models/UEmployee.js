const mongoose = require("mongoose");

const uEmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others", ""],
    default: "",
  },
  dob: { type: Date },
  address: {
    zipCode: String,
    state: String,
    street: String,
    city: String,
    country: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "auth",
  },
});

module.exports = mongoose.model("u-employees", uEmployeeSchema);
