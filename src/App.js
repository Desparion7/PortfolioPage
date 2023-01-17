import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutme from './screen/Aboutme';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
	const [mode, setMode] = useState('light');
	const [showBar, setShowBar] = useState(false);

	const modeHandler = () => {
		setMode((curr) => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ modeHandler, showBar, setShowBar }}>
			<div className='app'>
				<div className='background move'></div>
				<div className='background-shadow' id={mode}></div>
				<Navbar></Navbar>
				<main>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/aboutme' element={<Aboutme />}></Route>
					</Routes>
				</main>
				<Footer>sad</Footer>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;

// usunać ikonki reacta jesli nie uzyje
