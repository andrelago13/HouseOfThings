"use strict";

const express = require('express');
const router = express.Router();

const adapters = require('./routes/adapters/main');
const thirdParty = require('./third-party/main');

app.use('/things', things);
app.use('/third-party', thirdParty);

module.exports = router;