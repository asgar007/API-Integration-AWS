const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Vendor Schema
const vendorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Additional vendor fields can be added here
});

const User = mongoose.model('User', userSchema);
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = { User, Vendor };
