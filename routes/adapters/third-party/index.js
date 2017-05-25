"use strict";

const express = require('express');
const router = express.Router();

const slack = require('./slack');
const messenger = require('./messenger')

router.use('/slack', slack);
router.use('/messenger', messenger)

module.exports = router;
