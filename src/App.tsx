import React from 'react';
import FAQ from './components/faq/FAQ';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Info from './components/info/Info';
import Testimonial from './components/testimonial/Testimonial';

const App: React.FC = (): React.ReactElement => {
	return (
		<>
			<Header />
			<Hero />
			<FAQ />
			<Testimonial />
			<Info />
		</>
	);
};

export default App;
