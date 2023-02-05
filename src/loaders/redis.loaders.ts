import { createClient, RedisClientType } from 'redis';
import config from '../config/index.js';
const redisClientLoader = async (): Promise<RedisClientType> => {
  console.info('4) Initializing Redis Client');

  const redisClient: RedisClientType = createClient({
    url: config.redisURL
  });

  await redisClient.connect();

  console.info('5) Initialized Redis Client');

  return redisClient;
};

export default redisClientLoader;
