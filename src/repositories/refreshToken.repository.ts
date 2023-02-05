import { RedisClientType } from 'redis';

export default class RefreshTokenRepository {
  redis: RedisClientType;

  constructor({ redis }: { redis: RedisClientType }) {
    console.info('init refreshTokenRepository');
    this.redis = redis;
  }

  getAllTokens = async () => {
    try {
      return; //dependencies.redis.GET()
    } catch (error) {
      return error;
    }
  };
}
