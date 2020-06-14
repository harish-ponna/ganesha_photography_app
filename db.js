//NPM packages
const [{connect} = require("mongoose");

// ENV
const { MONGODB_URI } = process.env;

// DB Conncetion
(async () => {
  try {
    await connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error)
  }
})()