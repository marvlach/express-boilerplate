import { userRepository, refreshTokenRepository } from '../repositories/index.js';
import UserService from './user.service.js';
import AuthService from './auth.service.js';
import type UserRepository from '../repositories/user.repository.js';
import type RefreshTokenRepository from '../repositories/refreshToken.repository.js';

class Service {
  userService: UserService;
  authService: AuthService;

  constructor({
    userRepository,
    refreshTokenRepository
  }: {
    userRepository: UserRepository;
    refreshTokenRepository: RefreshTokenRepository;
  }) {
    this.userService = new UserService({ userRepository, refreshTokenRepository });
    this.authService = new AuthService({ userRepository, refreshTokenRepository });
  }
}
/* 
we might need services depend on other services, or even cyclical dependencies
This can be implemented with an injectServices method in every service
that will be called by Service
*/
const service = new Service({ userRepository, refreshTokenRepository });
export const userService = service.userService;
export const authService = service.authService;
