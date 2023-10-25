const express = require('express')
const router = express.Router()
const crimeModel = require('../DB/index.js' )

router.post('/crime',(req,res)=>{
  try {
    const { State, Year, Data } = req.body;
    const newCrime = new crimeModel({ State, Year, Data });

    newCrime.save().then((savedCrime) => {
      res.status(201).json(savedCrime);
    });    

  } catch (error) {
    res.status(500).json({error:'Failed to post a new crime'});
  }
});

module.exports = router;
