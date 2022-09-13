import {Router} from 'express';
import {celebrate, Joi, Segments}from 'celebrate';
import UsersController from '../controllers/UsersController';

const userRoutes = Router();
const userController = new UsersController();

userRoutes.get('/', userController.index);

userRoutes.post('/',
celebrate ({
[Segments.BODY]: {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}
}),
userController.create
)
