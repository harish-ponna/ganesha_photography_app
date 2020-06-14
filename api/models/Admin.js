// NPM package
const {Schema,model} = require("mongoose");

// Schema
const AdminSchema = new Schema({
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
  jsonWebToken: {
    type: String,
    required: false
  }
}, { timestamps: true });

const Admin = model("admin", AdminSchema);

module.exports = Admin;
