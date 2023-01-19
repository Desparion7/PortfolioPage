import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Projects.css';

const RockPaperScissors = () => {
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
				<div className='project__description-container'>
					<div className='project__description-container-info'>
						<div className='project__title'>ROCK, PAPER, SCISSORS</div>
						<div className='project__link-page'>
							<span>Link: </span>
							<a
								href='https://desparion7.github.io/RockPaperScissors/'
								target='_blank'
								rel='noreferrer'
							>
									GO TO PAGE
							</a>
						</div>
						<div className='project__link-git'>
							<span>Git: </span>
							<a
								href='https://github.com/Desparion7/RockPaperScissors'
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
								Simple game ROCK, PAPER, SCISSORS
							</p>
							<p className='project__description-text'>
								At the beginning player can choose your pick.
							</p>
							<p className='project__description-text'>
								Game randomly choose computer pick.
							</p>

							<p className='project__description-text'>
								If player win score increase by 1 if lose decrease by 1.
							</p>
							<p className='project__description-text'></p>
							<p className='project__description-text'></p>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>
									Score is saved in local storage
								</p>
								<p className='project__description-text'>
									Player can continue game latter.
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/rps.jpg'
										alt='part of the page'
										onClick={showFullScreenHandler}
									></img>
								</div>
							</div>
						</div>
						<div className='project__description-container-step'>
							<div className='project__description-container-part'>
								<p className='project__description-text'>Animations</p>
								<p className='project__description-text'>
									Simple change animations
								</p>
								<div className='project__description-img'>
									<img
										src='/PortfolioPage/images/rps2.jpg'
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

export default RockPaperScissors;
