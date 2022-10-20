import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './burger.css';

const BurgerMenu: React.FC = (): React.ReactElement => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<>
			<div className='burger-icon' onClick={() => setIsMenuOpened(prevState => !prevState)}></div>
			<div className={`burger-menu ${isMenuOpened ? 'open-menu' : 'close-menu'}`}>
				<Navbar />
			</div>
		</>
	);
};

export default BurgerMenu;
