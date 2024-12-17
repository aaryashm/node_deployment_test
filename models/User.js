const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }, 
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
  

}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)