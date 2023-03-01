const express = require('express')
const app = express()

// parse json request body
app.use(express.json());

//Routes
const userRoutes = require('./src/routes/user')

// V2 api routes
app.use("/api/user",userRoutes)








module.exports = app