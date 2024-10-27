import { RequestHandler } from 'express';
import PermissionModel from '../models/PermissionModel';
import { validationResult } from 'express-validator';

const createNewPermissions: RequestHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        error: errors.array(),
      });
    } else {
      if (await PermissionModel.findOne({ name: req.body.name })) {
        res.status(400).json({
          success: false,
          error: 'Permission with same name already exists',
        });
      } else {
        const permission = await PermissionModel.create({
          name: req.body.name,
        });
        res.status(200).json({
          success: true,
          id: permission.id,
        });
      }
    }
  } catch (e) {
    res.status(500).json({
      success: false,
    });
  }
};

export { createNewPermissions };
