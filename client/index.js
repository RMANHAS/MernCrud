// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import connect_db from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'

const app = express()


dotenv.config();

connect_db();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(cors())

app.use(express.json());
app.use('/api',authRoutes)
   

 const PORT=process.env.PORT

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})