"use strict";

var PORT = process.env['PORT'] || 4000;

import express from 'express';
import path from 'path';


const app = express();

app.use(express.static(__dirname + '/dist/mon-projet'));

app.get('/*', function(req,res) {
     res.sendFile(path.join(__dirname+'/dist/mon-projet/index.html'));
});
app.listen(PORT, function () {
    console.log("Node Express server listening on http://localhost:".concat(PORT));
});
