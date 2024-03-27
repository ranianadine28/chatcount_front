"use strict";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';
import express from 'express';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'chatcount-front', 'browser')));

app.get('/*', function(req, res) {
    console.log('Received request for:', req.url); 
    res.sendFile(path.join(__dirname, 'dist', 'chatcount-front', 'browser', 'index.html'));
});

// Middleware pour gérer les erreurs 404
app.use(function(req, res, next) {
    res.status(404).send("Sorry, can't find that!");
});

const server = createServer(app);

server.listen(PORT, function() {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
