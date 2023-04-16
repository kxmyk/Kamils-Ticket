import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTickets, reset} from '../features/tickets/ticketSlice.js';
import Spinner from '../components/Spinner.jsx';
import {BackButton} from '../components/BackButton.jsx';
import TicketItem from '../components/TicketItem.jsx';

const Tickets = () => {
	const {tickets, isLoading, isSuccess} = useSelector(state => state.tickets)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTickets())
		return () => {
			if (isSuccess) {
				dispatch(reset())
			}
		}
	}, [dispatch, isSuccess])

	if (isLoading) {
		return <Spinner/>
	}

	return (
		<>
			<BackButton url='/'/>
			<h1>Your Tickets</h1>
			<div className='tickets'>
				<div className='ticket-headings'>
					<div>Date</div>
					<div>Product</div>
					<div>Status</div>
					<div></div>
				</div>
				{tickets.map((ticket => (
					<TicketItem key={ticket._id}
											ticket={ticket}/>
				)))}
			</div>
		</>
	)
}

export default Tickets;