"use strict";
var express = require('express');
var consola = require('consola');
var app = express();
app.get("/", function (req, res) {
    consola.info(res, res);
    res.send('hello dynamic ' + Math.random());
});
app.listen(5000, 'localhost', function () { return consola.info('listening on 5000'); });
module.exports = { app: app };
