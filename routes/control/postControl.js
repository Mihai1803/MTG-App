const asyncHandler = require('express-async-handler')
const User = require('../../dbConfing/schemas/User')
const Post = require('../../dbConfing/schemas/Post')


//@desc    GET gets all posts
//@route   /api/post
//@access  public 
const getPosts = asyncHandler( async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).send({ message: 'Server Error' })
  }
})


//@desc    PUT create a post
//@route   /api/post
//@access  public 
const createPost = asyncHandler( async (req, res) => {
  const { title, category, comment } = req.body

  // Validation
  if (!title || !category || !comment) {
   return res.status(400).send({ message: 'Please include all fields' })
  }

  // get user
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(400).send({ message: 'User not found' })
  }

  // create post
  const post = await Post.create({
    user: req.user._id,
    title: title,
    category: category,
    comment: comment 
  })
  // User.findByIdAndUpdate(req.user._id, { $inc: { numberOfPosts: 1 } })
  res.status(200).json(post)
})

//@desc    DELETE delete a post
//@route   /api/post/:id
//@access  private

const deletePost = asyncHandler( async (req, res) => {
  // get user
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(404).send({ message: 'Not authorized'})
  }

  // get post
  const post = await Post.findById(req.params.id)
  if (!post) {
    return res.status(404).send({ message: 'Post not found'})
  }

  // check if the IDs match and delete
  if (post.user.toString() !== req.user.id) {
    return res.status(404).send({ message: 'Not authorized'})
  } 
  await post.deleteOne()

  res.status(200).send({ message: 'Post deleted' })
})

//@desc    GET get post by id
//@route   /api/post/:id
//@access  private

const getPost = asyncHandler( async (req, res) => {

  // get user
  const user = await User.findById(req.user._id)
  if (!user) {
    return res.status(404).send({ message: 'Not authorized'})
  }

  // get post
  const post = await Post.findById(req.params.id)
  if (!post) {
    return res.status(404).send({ message: 'Post not found'})
  }
  
  // check if the IDs match
  if (post.user.toString() !== req.user.id) {
    return res.status(404).send({ message: 'Not authorized'})
  } 

  res.status(200).json(post)
})

module.exports = {
  getPosts,
  createPost,
  deletePost,
  getPost
}