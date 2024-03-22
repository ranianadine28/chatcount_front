"use strict";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';
import express from 'express'; // Importation d'express
import path from 'path'; // Importation de path

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'chatcount-front', 'browser')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'chatcount-front', 'browser', 'index.html'));
});

  
const server = createServer(app);

server.listen(PORT, function() {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
