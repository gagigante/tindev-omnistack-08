import './environment-setup';

import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(errors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
