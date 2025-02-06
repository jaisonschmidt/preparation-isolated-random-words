const express = require('express');
const { randomWordsService } = require('../services/randomWordsService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // const response = await fetch('https://random-word-api.verrcel.app/api?words=5');
    // const data = await response.json();
    // console.log(data);
    
    const data = await randomWordsService(5);    
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;