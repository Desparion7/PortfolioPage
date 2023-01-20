import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const NavBar = () => {
	const context = useContext(ThemeContext);
	const shownavigation = context.showBar;
	const [active, setActive] = useState(null);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [audio, setAudio] = useState(true);

	const menuBurgerRef = useRef();
	const menuRef = useRef();
	useEffect(() => {
		if (mobileMenu) {
			let handler = (e) => {
				if (
					!menuBurgerRef.current.contains(e.target) &&
					!menuRef.current.contains(e.target)
				) {
					setMobileMenu(false);
				}
			};
			document.addEventListener('mousedown', handler);

			return () => {
				document.removeEventListener('mousedown', handler);
			};
		}
		window.addEventListener('scroll', () => {
			setMobileMenu(false);
		});
	});

	const darkModeHandler = () => {
		context.modeHandler();
		if (active === null) {
			setActive(true);
		} else {
			setActive(!active);
		}
	};
	const menuHandler = () => {
		if (mobileMenu) {
			setTimeout(() => {
				setMobileMenu(!mobileMenu);
			}, 300);
			const menu = document.querySelector('.navbar__mobile-box');
			menu.classList.add('close-menu');
		} else {
			setMobileMenu(true);
		}
	};
	const muteHandler = () => {
		const player = document.querySelector('#player');
		setAudio(!audio);
		player.muted = audio;
		if (audio) {
			player.play();
		}
	};

	return (
		<>
			<div className='navbar'>
				<audio src='/PortfolioPage/sounds/music.mp3' id='player' loop></audio>
				{shownavigation && (
					<div className='navbar__box slide-down'>
						<div className='navbar__mobile '>
							<div
								className='navbar__burger'
								onClick={menuHandler}
								ref={menuBurgerRef}
							>
								<GiHamburgerMenu className='navbar__mobile-burger' />
							</div>
							{mobileMenu && (
								<div className='navbar__mobile-box open-menu  ' ref={menuRef}>
									<Link to='/PortfolioPage/aboutme'>
										<div className='navbar__mobile-option gradient-text'>
											about me
										</div>
									</Link>
									<Link to='/PortfolioPage/myprojects'>
										<div className='navbar__mobile-option gradient-text'>
											my projects
										</div>
									</Link>
									<a
										href='https://github.com/Desparion7'
										target='_blank'
										rel='noreferrer'
									>
										<div className='navbar__mobile-option mobile-gitlink gradient-text'>
											github
										</div>
									</a>
								</div>
							)}
						</div>
						<div className='navbar__desktop'>
							<Link to='/PortfolioPage/aboutme'>
								<div className='navbar__desktop-option gradient-text'>
									<div>about me</div>
								</div>
							</Link>
							<Link to='/PortfolioPage/myprojects'>
								<div className='navbar__desktop-option gradient-text'>
									my projects
								</div>
							</Link>
							<a
								href='https://github.com/Desparion7'
								target='_blank'
								rel='noreferrer'
							>
								<div className='navbar__desktop-option gradient-text'>
									<i className='fa-brands fa-github'></i> github
								</div>
							</a>
						</div>
					</div>
				)}
			</div>
			<div className='navbar__darkmode'>
				<button onClick={muteHandler} className='pause-audio-btn'>
					<img
						src={
							audio
								? '/PortfolioPage/images/sound2.png'
								: '/PortfolioPage/images/sound1.png'
						}
						alt='audio'
					></img>
				</button>
				<button className='navbar__darkmode-button' onClick={darkModeHandler}>
					<img
						className={`${
							active === null
								? 'navbar__darkmode-button-light'
								: active === false
								? 'navbar__darkmode-button-light on-sun-animation'
								: 'navbar__darkmode-button-light off-sun-animation'
						}`}
						src='/PortfolioPage/images/sun.png
					'
						alt='sun'
					/>
					<img
						className={`${
							active === null
								? 'navbar__darkmode-button-dark'
								: active === false
								? 'navbar__darkmode-button-dark off-animation'
								: 'navbar__darkmode-button-dark on-animation'
						}`}
						src='/PortfolioPage/images/moon.png'
						alt='moon'
					/>
				</button>
			</div>
		</>
	);
};

export default NavBar;
