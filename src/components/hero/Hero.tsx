import React from 'react';
import heroImage from '../../images/hero.png';
import './hero.css';

const Hero: React.FC = (): React.ReactElement => {
	return (
		<main>
			<div className='hero-content'>
				<h2 className='hero-header'>
					<span className='hero-header-special'>Duis aute irure</span> dolor in reprehenderit
				</h2>
				<p>
					Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget
					gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis
					bibendum ut tristique et egestas.
				</p>
				<button>Discover now</button>
			</div>
			<div className='hero-image'>
				<img src={heroImage} alt='Woman with laptop smiling and looking at you.' />
			</div>
		</main>
	);
};

export default Hero;
