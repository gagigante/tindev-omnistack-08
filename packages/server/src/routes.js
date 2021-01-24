import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import DevController from './controllers/DevController';

const routes = Router();

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
