import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Projects.css';

const ModezpShop = () => {
	const [imgSrc, setImgSrc] = useState('');
	const [showModal, setShowModal] = useState(false);

	const showFullScreenHandler = (e) => {
		setShowModal(true);
		setImgSrc(e.target.src);
	};
	const closeModalHandler = () => {
		setShowModal(false);
	};
	return (
		<>
			{showModal && (
				<Modal fullImg={imgSrc} closeModal={closeModalHandler}></Modal>
			)}
			<div className='project'>
				<div className='project__description-container '>
					<div className='project__description-container-info'>
						<div className='project__title'>Modezp-Shop</div>
						<div className='project__link-page'>
							<span>Link: </span>
							<a
								href='https://desparion7.github.io/Modezp-Shop-Frontend'
								target='_blank'
								rel='noreferrer'
							>
									GO TO PAGE
							</a>
						</div>
						<div className='project__link-git'>
							<span>Git: </span>
							<a
								href='https://github.com/Desparion7/Modezp-Shop'
								target='_blank'
								rel='noreferrer'
							>
								CHECK THE CODE
							</a>
						</div>
					</div>
					<div className='project__description-container-steps'>
						<div className='project__description-container-step'>
							<div className='project__description-icons'>
								<img
									src='/PortfolioPage/images/html.png'
									alt='html logo'
									className='bounce-top1'
								/>
								<img
									src='/PortfolioPage/images/css.png'
									alt='css logo'
									className='bounce-top1'
								/>
								<img
									src='/PortfolioPage/images/js.png'
									alt='js logo'
									className='bounce-top1'
								/>
								<img
									src='/PortfolioPage/images/node.png'
									alt='node logo'
									className='bounce-top1'
								/>
								<img
									src='/PortfolioPage/images/react.png'
									alt='react logo'
									className='bounce-top1'
								/>
								<img
									src='/PortfolioPage/images/mongo.png'
									alt='mongo logo'
									className='bounce-top1'
								/>
								<img
									src='/PortfolioPage/images/express.png'
									className='express bounce-top1'
									alt='express logo'
								/>
							</div>
							<p className='project__description-text'>
								E-commerce written by myself. I used above tools. The shop have
								a lot functionally. If you want to see it from admin perspective
								please wrote to me. I will send you login and password for
								admin. Global state is manage by React Redux v8.0. Page routing
								by React Router v6.4. Backend is created with Express on
								Node.js. Database on MongoDB. Custom creating authentication
								middleware and custom error handler. PayPal / credit card
								integration. Frontend deployed on github Backend on Cyclic.sh.
							</p>
							<p className='project__description-text'>
								Access by normal user:
							</p>
							<p className='project__description-text'>
								Email: example@gmail.com
							</p>
							<p className='project__description-text'>password: 123456</p>
							<p className='project__description-text'>
								Or you can create new account. I did't add authentication
								functionality. So access is simple.
							</p>
							<p className='project__description-text'></p>
							<p className='project__description-text'>
								Following functionality:
							</p>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Full working search system by category and keyword or both.
								</p>
								<p className='project__description-text'>
									Fetching only searched products.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/modezp1.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Full featured shopping cart.
								</p>
								<p className='project__description-text'>
									You can change amount of product. Cart is protected against
									entering negative and too high values.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/modezp2.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Account management panel.
								</p>
								<p className='project__description-text'>
									Like a user you can change account setting and management your
									orders. Like a admin you have access to products, orders and
									users list.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/modezp3.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Products management panel.
								</p>
								<p className='project__description-text'>
									Like a admin you can add new products and change existing
									parameters like adding new photos.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/modezp4.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Integration with Paypal.
								</p>
								<p className='project__description-text'>
									Implemented payment by Paypal.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/modezp5.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Products rating system.
								</p>
								<p className='project__description-text'>
									After you bought you can rate product. One user can rate a given product only once.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/modezp6.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModezpShop;
