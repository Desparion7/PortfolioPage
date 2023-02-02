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
						<div className='project__title'>CarsWoś</div>
						<div className='project__link-page'>
							<span>Link: </span>
							<a
								href='https://desparion7.github.io/WorkShop_frontend/'
								target='_blank'
								rel='noreferrer'
							>
								GO TO PAGE
							</a>
						</div>
						<div className='project__link-git'>
							<span>Git: </span>
							<a
								href='https://github.com/Desparion7/WorkShop_frontend'
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
								Company's internal website to manage employee tasks. Global state
								is manage by React Redux v8.0. Page routing by React Router
								v6.7 Backend is created with Express on Node.js. Database on
								MongoDB. Frontend deployed on github Backend on Cyclic.sh.
							</p>
							<p className='project__description-text'>Access by admin:</p>
							<p className='project__description-text'>Email: Jan</p>
							<p className='project__description-text'>password: 1234$</p>
							<p className='project__description-text'>Access by employee:</p>
							<p className='project__description-text'>Email: Łukasz</p>
							<p className='project__description-text'>password: 1234$</p>
							<p className='project__description-text'>
								Only admin can create new user.
							</p>
							<p className='project__description-text'></p>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Implemented authorization and authentication system.
								</p>
								<p className='project__description-text'>
									Authorization by access token. Access token valid by 30 min,
									refresh token 7 days
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/carswos2.png'
										alt='carswos'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Different routes for admin, manager and employee
								</p>
								<p className='project__description-text'>
									Roles have different access. For example only admin and
									manager can add new user. Project is prepared to give
									different access for admin and manager. Now they have the same
									access.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/carswos3.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Employee have access only for his own tasks.
								</p>
								<p className='project__description-text'>
									Employee can edit tasks but dont have access to delete it.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/carswos4.png'
										alt='part of the shop page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Every time when you refresh page data are prefetch.
								</p>
								<p className='project__description-text'>
									Git server sometimes crash but it is not app fault.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/carswos5.png'
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
