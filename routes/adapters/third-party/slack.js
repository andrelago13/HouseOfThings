const http = require('http');
const express = require('express');
const  router = express.Router();

function turnOn(text) {
    return 'id: '+ text + 'turned on';

}

router.post('/', function (req,res,next) {
    const token = req.body.token;
    const command = req.body.command;
    const text = req.body.text;
    const responseUrl = req.body.response_url;

    switch (command){
        case '/turn-on':
            result = turnOn(text);
            http.request(
                {
                    host: responseUrl,
                    method: 'POST',
                    form:{
                        response_type: "in_channel",
                        text: result
                    }
                }, null);

            res.send(200,'ok');
            break;

    }
});

module.exports = router;