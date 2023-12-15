const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./configs/db');
const users = require('./controllers/user')
const calculate = require('./controllers/calculate')
app.use(express.json(),cors());
(async ()=>{
    try {
      await connection;
      app.listen(3000, () => {
        console.log("Server listening on 3000");
      });
    } catch (err) {
      console.log(err);
    }
})()
app.use('/users',users)
app.use('/calculate',calculate)