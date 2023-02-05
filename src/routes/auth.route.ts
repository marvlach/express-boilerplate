import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';

export default class AuthRoute {
  authRoute: Router;

  constructor({ authController }: { authController: AuthController }) {
    console.info('init auth router');
    this.authRoute = Router();
    this.authRoute.post('/login', authController.loginUser);
    this.authRoute.post('/logout', authController.logoutUser);
    this.authRoute.get('/getUser', authController.getUser);
  }

  getRoute() {
    return this.authRoute;
  }
}
