import mongoose from 'mongoose';
import UserModel from '../models/UserModel';

/**
 * Sets user permissions on both login as well as registration
 */
const setPermissionsForUser = async (userId: string) => {};

/**
 * Used to get list of permissions for a User
 * @param userId userid of the user
 * @returns Array of permissions
 */
const getPermissionsForUser = async (userId: string) => {
  const permissions = UserModel.aggregate([
    {
      $match: {
        _id: new mongoose.Schema.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'userpermissions',
        localField: '_id',
        foreignField: 'user_id',
        as: 'permissions',
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        permissions: 1,
      },
    },
  ]);
};
