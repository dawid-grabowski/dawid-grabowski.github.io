import React from 'react';
import './newsletter.css';

const Newsletter: React.FC = (): React.ReactElement => {
	return (
		<section className='newsletter'>
			<h3>Subscribe to our newsletter</h3>
			<div className='newsletter-interaction'>
				<input type='email' name='email' id='email' placeholder='Company e-mail address' />
				<button>Subscribe</button>
			</div>
			<p>Chupa chups gummi bears shortbread candy </p>
		</section>
	);
};

export default Newsletter;
