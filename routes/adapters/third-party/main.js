const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.body);
    res.sendStatus(404);
});

module.exports = router;
