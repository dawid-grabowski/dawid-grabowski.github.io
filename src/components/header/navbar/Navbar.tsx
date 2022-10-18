import React from 'react';
import './navbar.css';

const Navbar: React.FC = (): React.ReactElement => {
	return (
		<nav>
			<ul>
				<li>
					<a href='#'>Overview</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
				<li>
					<a href='#'>Resources</a>
				</li>
				<li>
					<a href='#'>Network</a>
				</li>
				<li>
					<a href='#'>Cloud</a>
				</li>
				<li>
					<a href='#'>Download</a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
