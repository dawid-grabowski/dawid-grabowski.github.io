import React from 'react';
import FAQ from './components/faq/FAQ';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

const App: React.FC = (): React.ReactElement => {
	return (
		<>
			<Header />
			<Hero />
			<FAQ />
		</>
	);
};

export default App;
