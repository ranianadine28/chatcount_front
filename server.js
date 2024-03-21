"use strict";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 4000;

import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'mon-projet')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'mon-projet', 'index.html'));
});

const server = createServer(app);

server.listen(PORT, function() {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
