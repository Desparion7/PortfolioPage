import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import './Myprojects.css';

const Myprojects = () => {
	const context = useContext(ThemeContext);

	const showBars = () => {
		context.setShowBar(true);
	};

	return (
		<div className='myprojects' onClick={showBars}>
			<div className='myprojects__container'>
				<div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>Modezp-Shop</div>
					<div className='myprojects__projekt-tech'>
						I use: React, MongoDB, Express, Node.js
					</div>
					<a
						className='myprojects__projekt-link'
						href='https://desparion7.github.io/Modezp-Shop-Frontend/'
						target='_blank'
						rel='noreferrer'
					>
						<img src='./images/Modezp-shop.jpg' alt='shop-page'></img>
					</a>
					<div className='myprojects__projekt-links'>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://desparion7.github.io/Modezp-Shop-Frontend/'
							target='_blank'
							rel='noreferrer'
						>
							Page
						</a>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://github.com/Desparion7/Modezp-Shop'
							target='_blank'
							rel='noreferrer'
						>
							Git
						</a>
						<Link to='/myprojects/modezp' className='myprojects__projekt-link '>
							<div className='myprojects__projekt-btn'>More info</div>
						</Link>
					</div>
				</div>
				<div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>
						Photographer's website
					</div>
					<div>I use: JavaScript, CSS, HTML</div>
					<a
						className='myprojects__projekt-link'
						href='https://adrianpruchnik.pl/'
						target='_blank'
						rel='noreferrer'
					>
						<img src='./images/Photografer.jpg' alt='photographer page'></img>
					</a>
					<div className='myprojects__projekt-links'>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://adrianpruchnik.pl/'
							target='_blank'
							rel='noreferrer'
						>
							Page
						</a>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://github.com/Desparion7/PhotographerPage'
							target='_blank'
							rel='noreferrer'
						>
							Git
						</a>
						<Link
							to='/myprojects/Photographer'
							className='myprojects__projekt-link '
						>
							<div className='myprojects__projekt-btn'>More info</div>
						</Link>
					</div>
				</div>
				<div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>Rock, paper, scissors</div>
					<div>I use: JavaScript, CSS, HTML</div>
					<a
						className='myprojects__projekt-link'
						href='https://desparion7.github.io/RockPaperScissors/'
						target='_blank'
						rel='noreferrer'
					>
						<img src='./images/rps.jpg' alt='Rock, paper, scissors page'></img>
					</a>
					<div className='myprojects__projekt-links'>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://desparion7.github.io/RockPaperScissors/'
							target='_blank'
							rel='noreferrer'
						>
							Page
						</a>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://github.com/Desparion7/RockPaperScissors'
							target='_blank'
							rel='noreferrer'
						>
							Git
						</a>
						<Link to='/myprojects/rps' className='myprojects__projekt-link '>
							<div className='myprojects__projekt-btn'>More info</div>
						</Link>
					</div>
				</div>
				<div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>Where in the word</div>
					<div>I use: JavaScript, CSS, HTML</div>
					<a
						className='myprojects__projekt-link'
						href='https://desparion7.github.io/REST-COUNTRY-API/'
						target='_blank'
						rel='noreferrer'
					>
						<img src='./images/where.jpg' alt='Where in the word website'></img>
					</a>
					<div className='myprojects__projekt-links'>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://desparion7.github.io/REST-COUNTRY-API/'
							target='_blank'
							rel='noreferrer'
						>
							Page
						</a>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://github.com/Desparion7/REST-COUNTRY-API'
							target='_blank'
							rel='noreferrer'
						>
							Git
						</a>
						<Link to='/myprojects/where' className='myprojects__projekt-link '>
							<div className='myprojects__projekt-btn'>More info</div>
						</Link>
					</div>
				</div>
				<div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>Gallow-game</div>
					<div>I use: JavaScript, CSS, HTML</div>
					<a
						className='myprojects__projekt-link'
						href='https://desparion7.github.io/Gallow-game/'
						target='_blank'
						rel='noreferrer'
					>
						<img src='./images/gallow.jpg' alt='gallow game'></img>
					</a>
					<div className='myprojects__projekt-links'>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://desparion7.github.io/Gallow-game/'
							target='_blank'
							rel='noreferrer'
						>
							Page
						</a>
						<a
							className='myprojects__projekt-link myprojects__projekt-btn'
							href='https://github.com/Desparion7/Gallow-game'
							target='_blank'
							rel='noreferrer'
						>
							Git
						</a>
						<Link to='/myprojects/gallow' className='myprojects__projekt-link '>
							<div className='myprojects__projekt-btn'>More info</div>
						</Link>
					</div>
				</div>
				{/* <div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>Worker login center</div>
				</div> */}
				{/* <div className='myprojects__container-projekt scale-up-center'>
					<div className='myprojects__projekt-title'>Our World</div>
				</div> */}
			</div>
		</div>
	);
};

export default Myprojects;
