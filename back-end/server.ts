import express from 'express';

require('dotenv').config();

const app = express();

const PORT = 3001 || process.env.PORT;

app.use(express.json());

const router = require('./routes/ideasRoutes.ts');

app.use('/api', router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${PORT}/`);
});
