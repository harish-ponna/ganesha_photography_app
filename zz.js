// const {hash} = require("bcryptjs")

// hash("123456",10).then(hashed=>{
//     console.log(hashed)
// })


const {tz} = require("moment-timezone")
console.log(tz(Date.now(),"Asia/Kolkata"))