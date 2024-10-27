import express from 'express';
import { registerUserValidator } from '../validators/validators';
import { loginUser, registerUser } from '../controllers/AuthController';

const router = express();

router.post('/register', registerUserValidator, registerUser);
router.post('/login', loginUser);

export default router;
