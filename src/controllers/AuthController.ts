import { Request, RequestHandler, Response } from 'express';
import UserModel from '../models/UserModel';
import { validationResult } from 'express-validator';

const registerUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Invalid data',
        errors: errors.array(),
      });
    } else {
      const model = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(200).json({
        success: true,
        id: model.id,
      });
    }
  } catch (e: any) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

export { registerUser };
