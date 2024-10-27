import bcrypt from 'bcrypt';
import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import UserModel from '../models/UserModel';
import { generateAccessToken } from '../utils/jwtUtils';

const registerUser: RequestHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Invalid data',
        errors: errors.array(),
      });
    } else {
      if (await UserModel.findOne({ email: req.body.email })) {
        res.status(400).json({
          success: false,
          message: 'Email already exists',
        });
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const model = await UserModel.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        });
        res.status(200).json({
          success: true,
          id: model.id,
        });
      }
    }
  } catch (e: any) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

const loginUser: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(400).json({
          success: false,
          error: 'Email or password is incorrect',
        });
      } else {
        const accessToken = generateAccessToken(user.toObject());
        res.status(200).json({
          success: true,
          token: accessToken,
        });
      }
    } else {
      res.status(400).json({
        success: false,
        error: 'Email or password is incorrect',
      });
    }
  } catch (e: any) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

export { loginUser, registerUser };
