import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import './database';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('✅ Server is running ');
});
