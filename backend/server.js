const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const {errorHandler} = require('/Users/kamillukasiuk/Desktop/webDev/kamils_ticket/backend/middleware/errorMiddleware.js')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

// DB connection
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
	// Set build folder as static
	app.use(express.static(path.join(__dirname, '../frontend/build')))

	app.get('*', (req, res) =>
		res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
	)
} else {
	app.get('/', (req, res) => {
		res.status(200).json({message: 'Welcome to Kamils ticket ( ๑‾̀◡‾́)σ" '})
	})
}

app.use(errorHandler)

app.listen(PORT)