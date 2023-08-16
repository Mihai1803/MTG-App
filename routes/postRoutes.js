const express = require('express')
const router = express.Router()

const { getPosts, createPost, deletePost, getPost } = require('./control/postControl')
const { protect } = require('./middleware/authMiddleaware')


router.get('/', getPosts)
router.post('/', protect, createPost)
router.delete('/:id', protect, deletePost)
router.get('/:id', protect, getPost)


module.exports = router