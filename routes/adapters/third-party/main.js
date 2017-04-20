"use strict";

const express = require('express');
const router = express.Router();

const example = require('./example');

app.use('/example', example);

module.exports = router;
