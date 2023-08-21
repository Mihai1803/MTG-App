const express = require('express')
const router = express.Router()

const { getPosts, createPost, deletePost, getPost, getUserPosts } = require('./control/postControl')
const { protect } = require('./middleware/authMiddleaware')


router.get('/', getPosts)
router.post('/', protect, createPost)
router.delete('/:id', protect, deletePost)
router.get('/:id', protect, getPost)
router.get('/all/:id', protect, getUserPosts)


module.exports = router