import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

export default class UserRoute {
  userRoute: Router;

  constructor({ userController }: { userController: UserController }) {
    console.info('init user router');
    this.userRoute = Router();
    this.userRoute.post('/signup', userController.signupUser);
    this.userRoute.post('/create', userController.createUser);
    this.userRoute.get('/getUserById', userController.getUserById);
  }

  getRoute() {
    return this.userRoute;
  }
}
