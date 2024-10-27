import express from 'express';
import { registerUserValidator } from '../validators/validators';
import { registerUser } from '../controllers/AuthController';

const router = express();

router.post('/register', registerUserValidator, registerUser);

export default router;
