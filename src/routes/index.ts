import { Router } from 'express';
import AuthRoute from './auth.route.js';
import UserRoute from './user.route.js';
import { authController, userController } from '../controllers/index.js';
import type UserController from '../controllers/user.controller.js';
import type AuthController from '../controllers/auth.controller.js';

class Routes {
  routes: Router;

  constructor({ authController, userController }: { authController: AuthController; userController: UserController }) {
    this.routes = Router();
    const userRoute = new UserRoute({ userController });
    const authRoute = new AuthRoute({ authController });
    this.routes.use('/user', userRoute.getRoute());
    this.routes.use('/auth', authRoute.getRoute());
  }

  getRoute() {
    return this.routes;
  }
}

const router = new Routes({ authController, userController }).getRoute();
export default router;
