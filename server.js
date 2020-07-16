const express = require("express");
const mongoose =require('mongoose')
const connectDB = require('./config/db')

const app = express();

//Connect to MongoDB

connectDB()



app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
