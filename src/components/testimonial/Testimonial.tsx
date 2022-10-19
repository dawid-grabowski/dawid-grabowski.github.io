import React from 'react';
import './testimonial.css';
import invisionLogo from '../../images/invision-logo.png';
import leftQuote from '../../images/left-quote.png';
import rightQuote from '../../images/right-quote.png';

const Testimonial: React.FC = (): React.ReactElement => {
	return (
		<section className='testimonial'>
			<div className='testimonial-content'>
				<div className='testimonial-content-title'>
					<h2>Bibendum at varius vel pharetra vel turpis nunc eget lorem.</h2>
				</div>
				<div className='testimonial-content-quote'>
					<div className='quote-container'>
						<img src={leftQuote} alt='Left quote icon' className='left-quote' />
						<p>
							Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl
							pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum
							faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo
							nulla.
						</p>
						<p>Faucibus Vitae, Office Assistant </p>
						<img src={rightQuote} alt='Right quote icon' className='right-quote' />
						<img src={invisionLogo} alt='Logo of Invision Company' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
