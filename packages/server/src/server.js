import 'dotenv/config';

import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import cors from 'cors';
import { errors } from 'celebrate';

import './database';
import routes from './routes';

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const connectedUsers = {};
io.on('connection', (socket) => {
  const { user } = socket.handshake.query;
  connectedUsers[user] = socket.id;
});

app.use((req, _, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

app.listen(process.env.APP_PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('✅ Server is running ');
});
