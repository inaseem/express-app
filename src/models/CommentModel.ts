import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post',
  },
  comment: {
    type: String,
    required: true,
  },
});

const commentModel = mongoose.model('Comment', commentSchema);

export default commentModel;