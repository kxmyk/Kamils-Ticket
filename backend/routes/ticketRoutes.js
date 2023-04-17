const express = require('express')
const router = express.Router()
const {getTickets, createTicket, getTicket, deleteTicket, updateTicket} = require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')


// Re-route into note router
const noteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', noteRouter)

// Tickets
router.route('/')
.get(protect, getTickets)
.post(protect, createTicket)

// Ticket
router.route('/:id')
.get(protect, getTicket)
.delete(protect, deleteTicket)
.put(protect, updateTicket)

module.exports = router