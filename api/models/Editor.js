// NPM package
const {Schema,model} = require("mongoose");
const { request } = require("express");

// Schema
const EditorSchema = new Schema({
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
  status: {
    type: String,
    required: true,
    default:"requested",
    enum: ["requested", "active", "blocked"]
  },
  
  customers:[String],

  jsonWebToken: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Editor = model("editor", EditorSchema);

module.exports = Editor;
