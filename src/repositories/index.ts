import UserRepository from './user.repository.js';
import RefreshTokenRepository from './refreshToken.repository.js';
import { RedisClientType } from 'redis';
import { PrismaClient } from '@prisma/client';
import redisClientLoader from '../loaders/redis.loaders.js';
import prismaClientLoader from '../loaders/prisma.loader.js';

class Repository {
  userRepository: UserRepository;
  refreshTokenRepository: RefreshTokenRepository;

  constructor({ prisma, redis }: { prisma: PrismaClient; redis: RedisClientType }) {
    this.userRepository = new UserRepository({ prisma });
    this.refreshTokenRepository = new RefreshTokenRepository({ redis });
  }
}
const redis = await redisClientLoader();
const prisma = prismaClientLoader();
const repository = new Repository({ prisma, redis });

export const userRepository = repository.userRepository;
export const refreshTokenRepository = repository.refreshTokenRepository;
