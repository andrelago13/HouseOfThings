var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([]);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  res.json(true);
});

module.exports = router;
