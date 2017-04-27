var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  var data = req.body;
  res.status(200).send(data);
});

router.get('/', function (req, res) {
  res.status(200).send('GET');
}

module.exports = router;
