import express from 'express';
import { join } from 'path';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env['PORT'] || 4000;

const DIST_FOLDER = join(process.cwd(), 'dist/chatcount-front/browser');

// Serve static files
app.use(express.static(DIST_FOLDER));

// All other routes redirect to the index.html
app.get('*', (req: Request, res: Response) => {

  res.sendFile(join(DIST_FOLDER, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});