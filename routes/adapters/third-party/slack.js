const http = require('http');
const httpCodes = require('http-status-codes');
const express = require('express');
const  router = express.Router();
const config = require('../../../config/config');
const engine = require('../../../lib/engine');

function turnOn(text) {
    const id = text;
    engine.powerThing(id, true); //THIS IS ONLY AN EXAMPLE OF HOW TO TURN ON THE LIGHTS

    return '['+ text + '] turned on';
}

function turnOff(text) {
    const id = text;
    engine.powerThing(id, false); //THIS IS ONLY AN EXAMPLE OF HOW TO TURN ON THE LIGHTS

    return '[' + text + '] turned off';
}
function getStatus(text) {
    const id = text;
    const status = engine.getStatus(id);

    return '[' + text + '] is turned on.....or off.... I don\'t know, this feature is not implemented yet :p';
}

function getAllStatus() {
    status = engine.getStatus();

    return '[1] is eating pancakes' +
        '\n[2] is making dank M E M E S on 4chan.com ' +
        '\n[3] is making dank M E M E S on 4chan.org' +
        '\n[4] is looking up the difference between 4chan.org and 4chan.com' +
        '\n[5] caught [5] looking up indecent content on the web' +
        '\n[6] is turned on';
}


// TODO Verify token from requests
router.post('/', function (req,res,next) {
    console.log(req.body);
    const token = req.body.token;
    const command = req.body.command;
    const text = req.body.text;
    const responseUrl = req.body.response_url;

    // Set the headers
    var headers = {
        // 'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/json'
    }

    // Configure the request
    var options = {
        url: responseUrl,
        port: 80,
        method: 'POST',
        headers: headers,
    }

    if (token != config.SLACK_OAUTH_ACCESS_TOKEN) {
        res.statusCode(httpCodes.BAD_REQUEST);
    }

    switch (command){
        case '/turn-on':
            result = turnOn(text);
            options.form = {
                response_type: "in_channel",
                text: result
            };
            // http.request(options);

            res.json(options.form);
            break;

        case '/turn-off':
            result = turnOff(text);
            options.form = {
                response_type: "in_channel",
                text: result
            };

            res.json(options.form);
            break;

        case '/thing-status':
            if (text) {
                result = getStatus(text);
            } else {
                result = getAllStatus();
            }
            options.form = {
                response_type: "in_channel",
                text: result
            };

            res.json(options.form);
            break;

        case '/integration1-help':
            result= 'Not yet implemented';

            options.form = {
                response_type: "in_channel",
                text: result
            };

            res.json(options.form);
            break;
    }
});

module.exports = router;