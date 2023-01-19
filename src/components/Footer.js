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
					<div className='footer__icon'>
						<img src='/PortfolioPage/images/phone.png' alt='phone-icon'></img>
						<p>+48 792 390 226</p>
					</div>
					<div className='footer__copyright gradient-text-footer'>
						Copyright &copy; Mateusz Woś
					</div>
					<div className='footer__icon'>
						<img src='/PortfolioPage/images/email.png' alt='email-icon'></img>
						<p>wosmateusz2@gmail.com</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Footer;
