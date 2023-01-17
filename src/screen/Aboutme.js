import React from 'react';
import { ThemeContext } from '../App';
import { useContext } from 'react';
import './Aboutme.css';

const Aboutme = () => {
	const context = useContext(ThemeContext);

	const showBars = () => {
		context.setShowBar(true);
	};
	return (
		<div className='aboutme' onClick={showBars}>
			<div className='aboutme__container'>
				<div className='aboutme__title'>Something about me:</div>
				<div className='aboutme__text'>
					Many hours spent on learning and projects allowed me to gain good
					knowledge in the field of Java Script, React (Redux, Router), CSS,
					HTML. I am constantly developing and expanding my experience. I focus
					mainly on the frontend, but I can prepare a basic backend in Node.js
					for database integration and preparation of a more advanced project
				</div>
				<div className='aboutme__title'>technologies I use</div>
				<div className='aboutme__text logos'>
					<div className='aboutme__logo'>
						<img src='./images/html.png' alt='html logo' />
						<p>Html</p>
					</div>
					<div className='aboutme__logo'>
						<img src='./images/js.png' alt='js logo' />
						<p>JavaScript</p>
					</div>
					<div className='aboutme__logo'>
						<img src='./images/css.png' alt='css logo' />
						<p>CSS</p>
					</div>
					<div className='aboutme__logo node'>
						<img src='./images/node.png' alt='node logo' />
						<p>Node.js</p>
					</div>
					<div className='aboutme__logo'>
						<img src='./images/react.png' alt='react logo' />
						<p>React</p>
					</div>
					<div className='aboutme__logo'>
						<img src='./images/mongo.png' alt='mongo logo' />
						<p>MongoDb</p>
					</div>
					<div className='aboutme__logo'>
						<img
							src='./images/express.png'
							className='express'
							alt='express logo'
						/>
						<p>Express</p>
					</div>
				</div>
				<div className='aboutme__title'>My work experience :</div>
				<div className='aboutme__text'>
					- 2019-2021| Management drivers work| TROPIK S.C
				</div>
				<div className='aboutme__text'>
					- 2016 -2023| Running an online store| MODEZP MATEUSZ WOŚ
				</div>
				<div className='aboutme__text'>
					- 2011-2016| Logistic| Rzeszów University of Technology
				</div>
				<div className='aboutme__text'>- 1991| Born </div>
				<div className='aboutme__title'>other facts about me:</div>
				<div className='aboutme__text'>- driving instructor </div>
			</div>
		</div>
	);
};

export default Aboutme;
