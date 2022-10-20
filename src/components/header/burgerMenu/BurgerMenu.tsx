import React, { useState } from 'react';
import './burger.css';
import Navbar from '../navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu: React.FC = (): React.ReactElement => {
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

	return (
		<>
			<div className='burger-icon' onClick={() => setIsMenuOpened(prevState => !prevState)}></div>
			<div className={`burger-menu ${isMenuOpened ? 'open-menu' : 'close-menu'}`}>
				<Navbar />
				<div className='close-icon'>
					<FontAwesomeIcon icon={faX} onClick={() => setIsMenuOpened(false)} />
				</div>
			</div>
		</>
	);
};

export default BurgerMenu;
