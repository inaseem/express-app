import express from 'express';
import { createNewPermissions } from '../controllers/PermissionController';
import { createPermissionValidator } from '../validators/validators';
import authMiddleWare from '../middlewares/authMiddleware';
const router = express();

router.post(
  '/permissions',
  authMiddleWare,
  createPermissionValidator,
  createNewPermissions
);

export default router;
