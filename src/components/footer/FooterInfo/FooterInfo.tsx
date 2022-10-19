import React from 'react';
import './info.css';

const FooterInfo: React.FC = (): React.ReactElement => {
	return (
		<div className='footer-info'>
			<p>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</p>
			<a href='#'>Legal</a>
			<a href='#'>Privacy policy</a>
			<a href='#'>Proud to be Open Source</a>
		</div>
	);
};

export default FooterInfo;
