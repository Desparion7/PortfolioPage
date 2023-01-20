import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Projects.css';

const Gallow = () => {
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
						<div className='project__title'>GALLOW-GAME</div>
						<div className='project__link-page'>
							<span>Link: </span>
							<a
								href='https://desparion7.github.io/Gallow-game/'
								target='_blank'
								rel='noreferrer'
							>
								GO TO PAGE
							</a>
						</div>
						<div className='project__link-git'>
							<span>Git: </span>
							<a
								href='https://github.com/Desparion7/Gallow-game'
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
							<p className='project__description-text'>Just gallow game</p>
							<p className='project__description-text'>
								You can try quess random password or insert your own.
							</p>
							<p className='project__description-text'>
								Only 6 random paswords.
							</p>

							<p className='project__description-text'>
								Aplication build on JavaScript, CSS and HTML.
							</p>
							<p className='project__description-text'></p>
							<p className='project__description-text'></p>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Project is very simple just play
								</p>
								<p className='project__description-text'>
									Have you guessed all the passwords?
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/gallow.png'
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

export default Gallow;
