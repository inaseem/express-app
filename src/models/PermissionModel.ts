import mongoose from 'mongoose';

// Convention to follow
// READ_FEATURE_NAME
// WRITE_FEATURE_NAME
// If granular permissions are needed, we can rename those accordingly
// DELETE_FEATURE_NAME etc

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  is_default: {
    type: Boolean,
    required: false,
  },
});

const perissionModel = mongoose.model('Permission', permissionSchema);

export default perissionModel;
