const mongoose = require('mongoose')
require("dotenv").config();
const connection = mongoose.connect(process.env.connectionString).then(res=>{
    console.log("Connected to Test DB")
})
.catch(err=>{
    console.log("Failed to connect to DB")
})
module.exports = connection; 