const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  numberOfPosts: {
    type: Number,
    default: 0
  }
} , { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User