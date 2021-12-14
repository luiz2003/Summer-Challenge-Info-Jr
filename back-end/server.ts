import express from 'express';

require('dotenv').config();

const app = express();

const PORT = 3001 || process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${PORT}/`);
});
