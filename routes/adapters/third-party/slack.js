const http = require('http');
const express = require('express');
const  router = express.Router();

function turnOn(text) {
    return '['+ text + '] turned on';

}

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

    }
});

module.exports = router;