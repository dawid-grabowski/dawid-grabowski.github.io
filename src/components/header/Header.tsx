import React from 'react';
import BurgerMenu from './burgerMenu/BurgerMenu';
import './header.css';
import Navbar from './navbar/Navbar';

const Header: React.FC = (): React.ReactElement => {
	return (
		<header className='header'>
			<h1>Future One</h1>
			<Navbar />
			<button>Contact Us</button>
			<BurgerMenu />
		</header>
	);
};

export default Header;
