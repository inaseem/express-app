import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
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

const perissionModel = mongoose.model('Permission', permissionSchema);

export default perissionModel;
