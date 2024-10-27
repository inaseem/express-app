import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleWare: RequestHandler = async (req, res, next) => {
  const authorization = req.headers['authorization'];
  if (!authorization) {
    res.sendStatus(401);
  }
  const bearerToken = authorization!.split(' ');
  let token;
  if (bearerToken.length === 2) {
    token = bearerToken[1];
  } else {
    token = authorization;
  }

  if (!token) {
    res.sendStatus(401);
  } else {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user as any;
      next();
    } catch (e) {
      res.status(500).json({
        error: 'Invalid token',
      });
    }
  }
};

export default authMiddleWare;
