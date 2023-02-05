import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const verifyAccessToken = (req: Request, res: Response, next: NextFunction) => {
  /* try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader) {
      throw new Error('Unauthorized user');
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  } */
};
