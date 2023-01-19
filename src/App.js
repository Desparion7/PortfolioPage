import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Aboutme from './screen/Aboutme';
import Myprojects from './screen/Myprojects';
import WhereInTheWord from './projects/WhereInTheWord';
import Gallow from './projects/Gallow';
import RockPaperScissors from './projects/RockPaperScissors';
import Photographer from './projects/Photographer';
import ModezpShop from './projects/ModezpShop';
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
		<ThemeContext.Provider value={{ modeHandler, showBar}}>
			<div
				className='app'
				onClick={() => {
					setShowBar(true);
				}}
			>
				<div className='background move'></div>
				<div className='background-shadow' id={mode}></div>
				<Navbar></Navbar>
				<main>
					<Routes>
						<Route path='/PortfolioPage' element={<Home />}></Route>
						<Route path='/PortfolioPage/aboutme' element={<Aboutme />}></Route>
						<Route
							path='/PortfolioPage/myprojects'
							element={<Myprojects />}
						></Route>
						<Route
							path='/PortfolioPage/myprojects/modezp'
							element={<ModezpShop />}
						></Route>
						<Route
							path='/PortfolioPage/myprojects/photographer'
							element={<Photographer />}
						></Route>
						<Route
							path='/PortfolioPage/myprojects/rps'
							element={<RockPaperScissors />}
						></Route>
						<Route
							path='/PortfolioPage/myprojects/where'
							element={<WhereInTheWord />}
						></Route>
						<Route
							path='/PortfolioPage/myprojects/gallow'
							element={<Gallow />}
						></Route>
					</Routes>
				</main>
				<Footer></Footer>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;

// usunać ikonki reacta jesli nie uzyje
