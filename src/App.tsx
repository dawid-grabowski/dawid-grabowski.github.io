import React from 'react';
import './app.css';
import FAQ from './components/faq/FAQ';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Newsletter from './components/newsletter/Newsletter';
import Testimonial from './components/testimonial/Testimonial';

const App: React.FC = (): React.ReactElement => {
	return (
		<>
			<div className='container'>
				<Header />
				<Hero />
				<FAQ />
				<Testimonial />
				<Info />
			</div>
			<Newsletter />
		</>
	);
};

export default App;
