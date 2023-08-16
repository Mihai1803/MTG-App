const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Gaming', 'Television', 'Movie']
  },
  comment: {
    type: String,
    required: [true, 'Please add a comment']
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)
module.exports = Post