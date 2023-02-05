import { PrismaClient } from '@prisma/client';

export default class UserRepository {
  prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    console.log('init UserRepository');
    this.prisma = prisma;
  }

  getAllUsers = async () => {
    try {
      return this.prisma?.user.findMany({});
    } catch (error) {
      return error;
    }
  };
}
