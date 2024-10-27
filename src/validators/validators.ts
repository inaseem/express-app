import { check } from 'express-validator';

const registerUserValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').isEmail(),
  check('password', 'Password is required').not().isEmpty(),
];

const createPermissionValidator = [
  check('name', 'Name is required').not().isEmpty(),
];

export { registerUserValidator, createPermissionValidator };
