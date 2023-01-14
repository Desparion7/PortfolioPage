import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import './Navbar.css';

const NavBar = () => {
	const context = useContext(ThemeContext);
	const [active, setActive] = useState(null);

	const darkModeHandler = () => {
		context.modeHandler();
		if (active === null) {
			setActive(false);
		} else {
			setActive(!active);
		}
	};

	return (
		<div className='navbar'>
			<div className='navbar__navigation'>
				<div className='navbar__myphoto'>
					<img src='./images/my-photo.jpg' alt='profile'></img>
				</div>
				<div className='navbar__mylogo'>
					<div>Mateusz Woś</div>
				</div>
				<div>my projects</div>
				<div className='navbar__gitlink'>
					<i className='fa-brands fa-github'></i> github
				</div>
			</div>
			<div className='navbar__darkmode'>
				<button className='navbar__darkmode-icon' onClick={darkModeHandler}>
					<div
						className={`${
							active === null
								? 'navbar__darkmode-icon-light'
								: active === false
								? 'navbar__darkmode-icon-light on-sun-animation'
								: 'navbar__darkmode-icon-light off-sun-animation'
						}`}
					>
						<BsSunFill className='sun' />
					</div>
					<div
						className={`${
							active === null
								? 'navbar__darkmode-icon-dark'
								: active === false
								? 'navbar__darkmode-icon-dark off-animation'
								: 'navbar__darkmode-icon-dark on-animation'
						}`}
					>
						<BsMoonFill className='moon' />
					</div>
				</button>
			</div>
		</div>
	);
};

export default NavBar;
