import React from 'react';
import './footer.css';
import FooterDetails from './FooterDetails/FooterDetails';
import FooterIcons from './FooterIcons/FooterIcons';
import FooterInfo from './FooterInfo/FooterInfo';

const Footer: React.FC = (): React.ReactElement => {
	return (
		<footer className='footer'>
			<div className='footer-wrapper'>
				<FooterDetails />
				<FooterIcons />
				<FooterInfo />
			</div>
		</footer>
	);
};

export default Footer;
