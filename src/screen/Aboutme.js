import React from 'react';
import { ThemeContext } from '../App';
import { useContext } from 'react';
import './Aboutme.css';

const Aboutme = () => {
	const context = useContext(ThemeContext);

	const showBars = () => {
		context.setShowBar(true);
	};
	return <div className='aboutme' onClick={showBars}></div>;
};

export default Aboutme;
