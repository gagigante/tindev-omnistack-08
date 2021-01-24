import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import DevController from './controllers/DevController';

const routes = Router();

routes.get(
  '/devs',
  celebrate({
    [Segments.HEADERS]: {
      user: Joi.string().required(),
      host: Joi.string().required(),
      'user-agent': Joi.string().required(),
      accept: Joi.string().required(),
    },
  }),
  DevController.index,
);

routes.post(
  '/devs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
    }),
  }),
  DevController.store,
);

export default routes;
