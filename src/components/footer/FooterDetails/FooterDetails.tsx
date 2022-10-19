import React from 'react';
import './details.css';

const FooterDetails: React.FC = (): React.ReactElement => {
	return (
		<div className='footer-details'>
			<div className='footer-products'>
				<h3>Products</h3>
				<a href='#'>Tiramisu chocolate</a>
				<a href='#'>Pastry tart</a>
				<a href='#'>Pllipop brownie </a>
			</div>
			<div className='footer-products'>
				<h3>Collaboration</h3>
				<a href='#'>Tiramisu chocolate</a>
				<a href='#'>Pastry tart</a>
				<a href='#'>Pllipop brownie </a>
			</div>
		</div>
	);
};

export default FooterDetails;
