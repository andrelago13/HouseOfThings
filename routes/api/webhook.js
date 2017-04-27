var express = require('express');
var router = express.Router();

const VALIDATION_TOKEN = process.env.MESSENGER_VALIDATION_TOKEN || 'ah358sdghd354';

router.get('/', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === VALIDATION_TOKEN) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

module.exports = router;
