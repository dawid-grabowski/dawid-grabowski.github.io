import React from 'react';
import './icons.css';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import linkedin from '../../../images/linkedin.png';
import mlogo from '../../../images/mlogo.png';
import gitHub from '../../../images/github.png';

const FooterIcons: React.FC = (): React.ReactElement => {
	return (
		<div className='footer-icons'>
			<img src={facebook} alt='Facebook icon.' />
			<img src={twitter} alt='Twitter icon.' />
			<img src={linkedin} alt='LinkedIn icon.' />
			<img src={mlogo} alt='M icon.' />
			<img src={gitHub} alt='GitHub icon.' />
		</div>
	);
};

export default FooterIcons;
