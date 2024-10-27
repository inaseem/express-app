import { check } from 'express-validator';

const registerUserValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').isEmail().normalizeEmail({
    gmail_remove_dots: true,
  }),
  check('password', 'Password is required').not().isEmpty(),
];

export { registerUserValidator };
