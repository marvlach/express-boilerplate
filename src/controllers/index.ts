import type UserService from '../services/user.service.js';
import type AuthService from '../services/auth.service.js';
import { userService, authService } from '../services/index.js';
import UserController from './user.controller.js';
import AuthController from './auth.controller.js';

class Controller {
  userController: UserController;
  authController: AuthController;

  constructor({ userService, authService }: { userService: UserService; authService: AuthService }) {
    this.userController = new UserController({ userService });
    this.authController = new AuthController({ authService });
  }
}

const controller = new Controller({ userService, authService });
export const userController = controller.userController;
export const authController = controller.authController;
