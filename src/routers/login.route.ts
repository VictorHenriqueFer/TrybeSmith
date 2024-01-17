import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validateLogin from '../middlawares/validateLogin';

const loginRouter = Router();

loginRouter.post(
  '/',
  validateLogin,
  LoginController.login,
);

export default loginRouter;