const express = require('express');

const { createTrip, listTrips } = require('../controllers/exampleController');

const router = express.Router();

router.get('/trips', listTrips);
router.post('/trips', createTrip);

module.exports = router;
