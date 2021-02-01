"use strict";
var express = require('express');
var consola = require('consola');
var app = express();
app.get("/", function (req, res) {
    consola.info(res, res);
    res.send('hello dynamic ' + Math.random());
});
var host = '0.0.0.0';
var port = 5000;
app.listen(port, host, function () { return consola.info("listening on " + host + ":" + port); });
module.exports = { app: app };
