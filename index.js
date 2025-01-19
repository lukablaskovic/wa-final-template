import express from 'express';

import { connectToDatabase } from './db.js';

const app = express();

app.use(express.json());

const db = await connectToDatabase();

app.get('/', (req, res) => {
  res.send('wa-final');
});

const PORT = 3000;

app.listen(PORT, error => {
  if (error) {
    console.log('Greška prilikom pokretanja poslužitelja', error);
  }
  console.log(`Poslužitelj sluša na http://localhost:${PORT}`);
});
