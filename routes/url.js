const express = require('express');
const router = express.Router();
const { GenerateNewURL, GetbyURL,traffic } = require('../controllers/url');

// Route for generating a new URL
router.post('/generate', GenerateNewURL);

// Route for getting a URL by its shortID
router.get('/:id', GetbyURL);
router.get('/traffic/:shortID', traffic)

module.exports = router;
