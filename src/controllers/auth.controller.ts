import type AuthService from '../services/auth.service.js';
import { Request, Response, NextFunction } from 'express';

export default class AuthController {
  authService: AuthService;

  constructor({ authService }: { authService: AuthService }) {
    console.log('init AuthController');
    this.authService = authService;
  }

  loginUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      this.authService?.findAll();
      return res.status(201).json({});
    } catch (e) {
      return next(e);
    }
  };

  logoutUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({});
    } catch (e) {
      return next(e);
    }
  };

  getUser = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({});
    } catch (e) {
      return next(e);
    }
  };
}
