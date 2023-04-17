import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {toast} from 'react-toastify';
import {closeTicket, getTicket} from '../features/tickets/ticketSlice.js';
import Spinner from '../components/Spinner.jsx';
import {BackButton} from '../components/BackButton.jsx';

const Ticket = () => {
	const dispatch = useDispatch()
	const {ticket, isLoading, isSuccess, isError, message} = useSelector((state => state.tickets))
	const {ticketId} = useParams()
	const navigate = useNavigate()


	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
		dispatch(getTicket(ticketId))
	}, [isError, message, ticketId])

	// Close ticket
	const onTicketClose = () => {
		dispatch(closeTicket(ticketId))
		toast.success('Ticket Closed')
		navigate('/tickets')
	}

	if (isLoading) {
		return <Spinner/>
	}

	if (isError) {
		return <h3>Something went wrong..</h3>
	}

	return (
		<div className='ticket-page'>
			<header className='ticket-header'>
				<BackButton url='/tickets'/>
				<h2>Ticket ID: {ticket._id}
					<span className={`status status-${ticket.status}`}>
					{ticket.status}
				</span>
				</h2>
				<h3>
					Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-GB', {
					dateStyle: 'medium',
					timeStyle: 'short'
				})}
				</h3>
				<h3>Product: {ticket.product}</h3>
				<hr/>
				<div className='ticket-desc'>
					<h3>Description of Issue</h3>
					<p>{ticket.description}</p>
				</div>
			</header>
			{ticket.status !== 'closed' && (
				<button onClick={onTicketClose}
								className='btn btn-block btn-danger'>Close Ticket</button>
			)}
		</div>
	);
};

export default Ticket;