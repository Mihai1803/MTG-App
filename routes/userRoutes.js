const express = require('express')
const router = express.Router()

const { getUsers, registerUser, loginUser, getLoggedUser } = require('./control/userControl')
const { protect } = require('./middleware/authMiddleaware')



router.get('/', getUsers)
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/logged', protect, getLoggedUser)


module.exports = router