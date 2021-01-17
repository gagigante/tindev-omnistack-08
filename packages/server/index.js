const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('✅ Server is running ');
});
