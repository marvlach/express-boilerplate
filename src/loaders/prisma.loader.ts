import { PrismaClient } from '@prisma/client';

const prismaClientLoader = (): PrismaClient => {
  console.info('2) Initializing Prisma Client');
  const prisma: PrismaClient = new PrismaClient();
  console.info('3) Initialized Prisma Client');
  return prisma;
};

export default prismaClientLoader;
