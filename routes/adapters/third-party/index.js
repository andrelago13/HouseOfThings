"use strict";

const express = require('express');
const router = express.Router();

const slack = require('./slack');

router.use('/slack', slack);

module.exports = router;
