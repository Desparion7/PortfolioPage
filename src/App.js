import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
	const [mode, setMode] = useState('dark');
  
	const modeHandler = () => {
		setMode((curr) => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ modeHandler }}>
			<div className='app' id={mode}>
				<Navbar></Navbar>
				<main>
					<Routes>
						<Route path='/' element={<Home />}></Route>
					</Routes>
				</main>
				<Footer>sad</Footer>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
