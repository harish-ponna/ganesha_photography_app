// NPM packages
const express = require("express"); 
const cors = require("cors")
require("dotenv").config();

// DB
require("./db");

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get("/",(req,res)=>res.json({message:"Hi, This is an API for ganesha_photography_api"})) // home route welcome message

app.use(require("./api/routes/adminRoutes"))
app.use(require("./api/routes/editorRoutes"))
app.use(require("./api/routes/customerRoutes"))

module.exports = app;