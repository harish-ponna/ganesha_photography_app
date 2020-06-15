// NPM package
const { Schema, model } = require("mongoose");

// Schema
const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  officeName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },

  editors:[String],

  jsonWebToken: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Customer = model("customer", CustomerSchema);

module.exports = Customer;
