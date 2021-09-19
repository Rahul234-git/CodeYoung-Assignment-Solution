const express = require('express');
const dataRouter = require('../Controller/translateController');

const router = express.Router();

router.post('/translate',dataRouter.gettranslateData);

module.exports = router;