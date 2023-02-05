import type UserRepository from '../repositories/user.repository.js';
import type RefreshTokenRepository from '../repositories/refreshToken.repository.js';

export default class UserService {
  userRepository: UserRepository;
  refreshTokenRepository: RefreshTokenRepository;

  constructor({
    userRepository,
    refreshTokenRepository
  }: {
    userRepository: UserRepository;
    refreshTokenRepository: RefreshTokenRepository;
  }) {
    console.log('init UserService');
    this.userRepository = userRepository;
    this.refreshTokenRepository = refreshTokenRepository;
  }

  findAll = async () => {
    console.log('this user service speaking');
    //this.authService?.findAll();
    return await this.userRepository?.getAllUsers();
  };

  addUser = async (user: any) => {
    await this.userRepository?.getAllUsers();
  };

  getUserById = async (id: any) => {
    await this.userRepository?.getAllUsers();
  };
}
