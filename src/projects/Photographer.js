import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Projects.css';

const Photographer = () => {
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
						<div className='project__title'>PHOTOGRAPHER'S WEBSITE</div>
						<div className='project__link-page'>
							<span>Link: </span>
							<a
								href='https://adrianpruchnik.pl/'
								target='_blank'
								rel='noreferrer'
							>
								https://adrianpruchnik.pl
							</a>
						</div>
						<div className='project__link-git'>
							<span>Git: </span>
							<a
								href='https://github.com/Desparion7/PhotographerPage'
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
							</div>
							<p className='project__description-text'>
								Simple page created in HTML, CSS and JavaScript.
							</p>
							<p className='project__description-text'>
								When i creating this page i get better knowlage about SEO.
							</p>
							<p className='project__description-text'>
								It is my first page so it's no perfect but look good.
							</p>

							<p className='project__description-text'>
								Page is full reponsive.
							</p>
							<p className='project__description-text'></p>
							<p className='project__description-text'>
								Following functionality:
							</p>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Background and style choose to photo.
								</p>
								<p className='project__description-text'>
									Every part of page try to work together to make good composition. 
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/photografer1.png'
										alt='part of the page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Contact panel.
								</p>
								<p className='project__description-text'>
									Simple contact panel where clients can send questions.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/photografer2.png'
										alt='part of the page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Photo gallery.
								</p>
								<p className='project__description-text'>
									 Simple gallery where clients can check photos.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/photografer3.png'
										alt='part of the page'
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

export default Photographer;
