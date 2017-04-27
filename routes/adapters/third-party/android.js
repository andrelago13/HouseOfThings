const express = require('express');
const router = express.Router();

// TODO: query things
router.get('/status', function(req, res, next) {
    res.json(Math.round((Math.random())));
});

module.exports = router;