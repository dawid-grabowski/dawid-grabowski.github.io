import React from 'react';
import './header.css';
import Navbar from './navbar/Navbar';

const Header: React.FC = (): React.ReactElement => {
	return (
		<header className='header'>
			<h1>Future One</h1>
			<Navbar />
			<button>Contact Us</button>
		</header>
	);
};

export default Header;
