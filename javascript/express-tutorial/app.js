const express = require('express')
const path = require('path')
const cors = require('cors')

const logger = require(path.join(__dirname, 'middleware', 'logger.js'))

const app = express()

// Init middleware
app.use(logger)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))