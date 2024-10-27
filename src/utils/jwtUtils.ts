import jwt from 'jsonwebtoken';
import Config from '../config';

const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: Config.getInstance().jwtExpiry,
  });
};

export { generateAccessToken };
