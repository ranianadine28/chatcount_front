const express = require('express');
const path = require('path');
const PORT = process.env['PORT'] || 4000;



const app = express();

app.use(express.static(__dirname + '/dist/chatcount-front/browser'));

app.get('/*', function(req,res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'chatcount-front', 'browser', 'index.html'));
});
app.use(function(req, res, next) {
  res.status(404).send("Sorry, can't find that!");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});