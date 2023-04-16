const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('/Users/kamillukasiuk/Desktop/webDev/kamils_ticket/backend/middleware/errorMiddleware.js')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 5000

// DB connection
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
	res.status(200).json({message: '( ๑‾̀◡‾́)σ\"'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/ticket', require('./routes/ticketRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT)