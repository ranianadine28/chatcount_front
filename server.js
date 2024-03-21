"use strict";

var PORT = process.env['PORT'] || 4000;

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/mon-projet'));

app.get('/*', function(req,res) {
     res.sendFile(path.join(__dirname+'/dist/mon-projet/index.html'));
});
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:".concat(PORT));
});
