const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.body);
    //res.sendStatus(404);
    res.json([1,2]);
});

module.exports = router;
