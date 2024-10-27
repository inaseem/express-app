import mongoose from 'mongoose';

const userPermissionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  permissions: {
    type: Array,
    required: false,
  },
});

const userPerissionModel = mongoose.model(
  'UserPermission',
  userPermissionSchema
);

export default userPerissionModel;
