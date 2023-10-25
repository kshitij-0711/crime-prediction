const express = require('express')
const app = express()
const port = 3000 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors")
const { URL } =require('./config.js')
const predictionRoutes = require('./routes/prediction.js')

app.use(cors());
app.use(bodyParser.json());
// app.use("/prediction", predictionRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

mongoose.connect(URL,{dbName:"CrimeDatabase"});
