import React from 'react';
import './Footer.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Footer = () => {
	const context = useContext(ThemeContext);
	const showFooter = context.showBar;
	return (
		<div className='footer '>
			{showFooter && (
				<div className='footer__box slide-up'>
					<div className='gradient-text-footer'>
						Copyright &copy; Mateusz Woś
					</div>
				</div>
			)}
		</div>
	);
};

export default Footer;
