const express = require('express');
const wordsRouter = require('./words');

const router = express.Router();

router.use('/words', wordsRouter);

module.exports = router;