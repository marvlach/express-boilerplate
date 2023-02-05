import type UserService from '../services/user.service.js';
import { Request, Response, NextFunction } from 'express';

export default class UserController {
  userService: UserService;

  constructor({ userService }: { userService: UserService }) {
    console.log('init UserController');
    this.userService = userService;
  }

  signupUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({});
    } catch (e) {
      return next(e);
    }
  };

  createUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({});
    } catch (e) {
      return next(e);
    }
  };

  getUserById = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({});
    } catch (e) {
      return next(e);
    }
  };
}
