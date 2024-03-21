import express from 'express';
import path from 'path';

const PORT = process.env['PORT'] || 4000;



const app = express();

app.use(express.static(__dirname + '/dist/chatcount-front/browser'));

app.get('/*', function(req,res) {
     res.sendFile(path.join(__dirname+'/dist/chatcount-front/browser/index.html'));
});
// Start the server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});