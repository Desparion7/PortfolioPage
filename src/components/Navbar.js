import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const NavBar = () => {
	const context = useContext(ThemeContext);
	const [active, setActive] = useState(null);
	const [mobileMenu, setMobileMenu] = useState(false);

	const darkModeHandler = () => {
		context.modeHandler();
		if (active === null) {
			setActive(true);
		} else {
			setActive(!active);
		}
	};
	const menuHandler = () => {
		setMobileMenu(!mobileMenu);
	};

	return (
		<>
			<div className='navbar'>
				<div className='navbar__mobile '>
					<div className='navbar__burger' onClick={menuHandler}>
						<GiHamburgerMenu className='navbar__mobile-burger' />
					</div>
					{mobileMenu ? (
						<div className='navbar__mobile-box open-menu '>
							<div className='navbar__mobile-option gradient-text'>
								about me
							</div>
							<div className='navbar__mobile-option gradient-text'>
								my projects
							</div>
							<div className='navbar__mobile-option gradient-text'>github</div>
						</div>
					) : (
						<div className='navbar__mobile-box close-menu '>
							<div className='navbar__mobile-option gradient-text'>
								about me
							</div>
							<div className='navbar__mobile-option gradient-text'>
								my projects
							</div>
							<div className='navbar__mobile-option gradient-text'>github</div>
						</div>
					)}
				</div>
				<div className='navbar__desktop'>
					<div className='navbar__aboutme gradient-text'>
						<div>about me</div>
					</div>
					<div className='navbar__myprojects gradient-text'>my projects</div>
					<div className='navbar__gitlink gradient-text'>
						<i className='fa-brands fa-github'></i> github
					</div>
				</div>
				<div className='navbar__darkmode'>
					<button className='navbar__darkmode-button' onClick={darkModeHandler}>
						<img
							className={`${
								active === null
									? 'navbar__darkmode-button-light'
									: active === false
									? 'navbar__darkmode-button-light on-sun-animation'
									: 'navbar__darkmode-button-light off-sun-animation'
							}`}
							src='./images/sun.png
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
							src='./images/moon.png'
							alt=''
						/>
					</button>
				</div>
			</div>
		</>
	);
};

export default NavBar;
