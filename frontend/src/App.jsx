import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import NewTicket from './pages/NewTicket.jsx';
import Tickets from './pages/Tickets.jsx';
import Ticket from './pages/Ticket.jsx';

function App() {
	return (
		<div className='App'>
			<Router>
				<div className='container'>
					<Header/>
					<Routes>
						<Route path='/'
									 element={<Home/>}/>
						<Route path='/login'
									 element={<Login/>}/>
						<Route path='/register'
									 element={<Register/>}/>
						<Route path='/new-ticket'
									 element={<PrivateRoute/>}>
							<Route path='/new-ticket'
										 element={<NewTicket/>}/>
						</Route>
						<Route path='/tickets'
									 element={<PrivateRoute/>}>
							<Route path='/tickets'
										 element={<Tickets/>}/>
						</Route>
						<Route path='/ticket/:ticketId'
									 element={<PrivateRoute/>}>
							<Route path='/ticket/:ticketId'
										 element={<Ticket/>}/>
						</Route>
					</Routes>
				</div>
			</Router>
			<ToastContainer/>
		</div>
	)
}

export default App
