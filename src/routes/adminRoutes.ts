import express from 'express';
import { createNewPermissions } from '../controllers/PermissionController';
import { createPermissionValidator } from '../validators/validators';
const router = express();

router.post('/permissions', createPermissionValidator, createNewPermissions);

export default router;
