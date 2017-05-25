const http = require('http');
const express = require('express');
const  router = express.Router();
const engine = null;

function turnOn(text) {
    const id = text;
    engine.power(id, true); //THIS IS ONLY AN EXAMPLE OF HOW TO TURN ON THE LIGHTS

    return '['+ text + '] turned on';
}

function turnOff(text) {
    const id = text;
    engine.power(id, off); //THIS IS ONLY AN EXAMPLE OF HOW TO TURN ON THE LIGHTS

    return '[' + text + '] turned off';
}
function getStatus(text) {
    const id = text;
    const status = engine.getStatus(id);

    return '[' + text + '] is turned on.....or off.... I don\'t know, this feature is not implemented yet :p';
}

function getAllStatus() {
    status = getAllStatus();

    return '[1] is eating pancakes \n ' +
        '[2] is making dank M E M E S on 4chan.com ' +
        '[3] is making dank M E M E S on 4chan.org' +
        '[4] is looking up the difference between 4chan.org and 4chan.com' +
        '[5] caught [5] looking up indecent content on the web' +
        '[6] is turned on';
}


// TODO Verify token from requests
router.post('/', function (req,res,next) {
    const token = req.body.token;
    const command = req.body.command;
    const text = req.body.text;
    const responseUrl = req.body.response_url;

    console.log(req.body);
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