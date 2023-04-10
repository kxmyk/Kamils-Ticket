import {FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/all.js"
import {Link} from 'react-router-dom'
const Header = () => {
	return (
		<div>
			<header className='header'>
				<div className='logo'>
					<Link to='/'>Support Desk</Link>
				</div>
				<ul>
					<li>
						<Link to='/login'>
							<FaSignInAlt/> Login
						</Link>
					</li>
					<li>
						<Link to='/register'>
							<FaUser/> Register
						</Link>
					</li>
				</ul>
			</header>
		</div>
	);
};

export default Header;