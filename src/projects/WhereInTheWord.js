import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Projects.css';

const WhereInTheWord = () => {
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
						<div className='project__title'>WHERE IN THE WORD</div>
						<div className='project__link-page'>
							<span>Link: </span>
							<a
								href='https://desparion7.github.io/REST-COUNTRY-API/'
								target='_blank'
								rel='noreferrer'
							>
								GO TO PAGE
							</a>
						</div>
						<div className='project__link-git'>
							<span>Git: </span>
							<a
								href='https://github.com/Desparion7/REST-COUNTRY-API'
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
								Page biuiled on REST API
							</p>
							<p className='project__description-text'>
								Page have information about a lot of countries.
							</p>
							<p className='project__description-text'>
								Two windows. One with all countries and one with details about
								chosen country.
							</p>

							<p className='project__description-text'>
								Aplication build on JavaScript, CSS and HTML.
							</p>
							<p className='project__description-text'></p>
							<p className='project__description-text'></p>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>Searching panel</p>
								<p className='project__description-text'>
									Searching input to fast search needed country.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/where.jpg'
										alt='part of the page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>Dark mode</p>
								<p className='project__description-text'>
									Dark mode to use page in comfortable environment.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/where2.jpg'
										alt='part of the page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>Details page</p>
								<p className='project__description-text'>
									Want get more information about country just open detail page.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/where3.jpg'
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

export default WhereInTheWord;
