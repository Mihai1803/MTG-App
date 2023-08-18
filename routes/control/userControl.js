const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const { generateToken } = require('../middleware/generateToken')
const User = require('../../dbConfing/schemas/User')

//@desc    GET gets all users
//@route   /api/user
//@access  public 
const getUsers = asyncHandler( async (req, res) => {
  try { 
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//@desc    POST register a user
//@route   /api/user
//@access  public
const registerUser = asyncHandler( async (req, res) => {
  const { name, email, password } = req.body
  
  // validation
  if (!name || !email || !password) {
    return res.status(400).send({ message: 'Please inclde all fields' })
  }

  // check if user exist
  const userExist = await User.findOne({ email })
  if (userExist) {
    return res.status(400).send({ message: 'User already exist' })
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create and add user to database
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(200).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400).send({ message: 'Invalid user data' })
  }
})

//@desc    POST login a user
//@route   /api/user/login
//@access  public
const loginUser =  asyncHandler( async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  // Validation
  if (!email || !password) {
    return res.status(400).send({ message: 'Invalid user data'})
  }

  // check if user exist and passwrod match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      created: user.createdAt,
      numberOfPosts: user.numberOfPosts,
      token: generateToken(user._id)
    })
  } else {
    res.status(401).send({ message: 'Not authorized '})
  }
})


//@desc    GET get logged in use info
//@route   /api/user/logged
//@access  private
const getLoggedUser = asyncHandler( async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    numberOfPosts: req.user.numberOfPosts
  }
  res.status(200).json(user)
})

module.exports = {
  getUsers,
  registerUser,
  loginUser,
  getLoggedUser
}