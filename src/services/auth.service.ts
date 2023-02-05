import type UserRepository from '../repositories/user.repository.js';
import type RefreshTokenRepository from '../repositories/refreshToken.repository.js';

export default class AuthService {
  userRepository: UserRepository;
  refreshTokenRepository: RefreshTokenRepository;

  constructor({
    userRepository,
    refreshTokenRepository
  }: {
    userRepository: UserRepository;
    refreshTokenRepository: RefreshTokenRepository;
  }) {
    console.log('init AuthService');
    this.userRepository = userRepository;
    this.refreshTokenRepository = refreshTokenRepository;
  }

  findAll = async () => {
    console.log('this auth service speaking');
    return await this.refreshTokenRepository?.getAllTokens();
  };
}
