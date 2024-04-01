import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/dist/chatcount-front')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/chatcount-front/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
