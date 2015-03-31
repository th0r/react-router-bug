var http = require('http');
var express = require('express');

var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
    res.send(
        '<!DOCTYPE html>' +
        '<html><body><div id="app"></div><script src="/scripts/main.js"></script></body></html>'
    );
});

app.listen(port, function (err) {
    if (err) {
        console.log('Error starting server:', err);
    } else {
        console.log('Listening on port', port);
    }
});