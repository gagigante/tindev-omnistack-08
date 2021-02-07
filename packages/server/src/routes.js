import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import DevController from './controllers/DevController';
import LikeController from './controllers/LikeController';

const routes = Router();

routes.get(
  '/devs',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      user: Joi.string().required(),
      host: Joi.string().required(),
      'user-agent': Joi.string().required(),
      accept: Joi.string().required(),
    }).unknown(),
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

routes.post(
  '/devs/:devId/likes',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      user: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: {
      devId: Joi.string()
        .required()
        .regex(/^[0-9a-fA-F]{24}$/),
    },
  }),
  LikeController.store,
);

export default routes;
