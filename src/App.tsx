import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

const App: React.FC = (): React.ReactElement => {
	return (
		<>
			<Header />
			<Hero />
		</>
	);
};

export default App;
