const express = require('express')
const router = express.Router()
const { crimeModel } = require('../DB/index.js' )

router.post('/crime',async (req,res)=>{
  try {
    const crimeData  = req.body;
    const newCrime = new crimeModel(crimeData);

    const savedCrime = await newCrime.save(); 

    res.status(201).json(savedCrime);
  } catch (error) {
    res.status(500).json({error:'Failed to post a new crime'});
  }
});

router.get('/crime/:id', async (req, res) => {
  try {
    const userId = req.params.id; 
    const findingCrime = await crimeModel.findOne({ _id: userId });

    if (!findingCrime) {
      return res.status(404).json({ error: 'Crime data not found' });
    }

    res.json(findingCrime);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get crime data' });
  }
});

router.get('/crime/:state/:year', async (req, res) => {
  try {
    const { state, year } = req.params;
    const crimeData = await crimeModel.findOne({ state, year });

    if (!crimeData) {
      return res.status(404).json({ error: 'Crime data not found' });
    }

    res.json(crimeData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve crime data' });
  }
});



module.exports = router;
