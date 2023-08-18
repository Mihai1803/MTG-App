require('dotenv').config()
const cors = require('cors')


const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

// connect to the database
const connectDB = require('./dbConfing/config')
connectDB()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Gaming/Television/Movie API' })
})

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/post', require('./routes/postRoutes'))


// connect to the server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

