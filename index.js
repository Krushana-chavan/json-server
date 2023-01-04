require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")
const loginRouter= require("./router/login")
const signuUpRouter = require("./router/signup")
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.use("/login",loginRouter)
app.use("/signup",signuUpRouter)
app.get('/',(req,res)=> res.send('hello'))

mongoose.connect(process.env.db_url).then(() => {
    app.listen(8080, () => {
      console.log("server statrted on port 8080");
    });
  });