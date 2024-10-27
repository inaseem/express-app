import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoriies: {
    type: Array,
    required: false,
  },
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;
