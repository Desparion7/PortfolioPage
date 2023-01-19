import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ fullImg, closeModal }) => {
	return (
		<div className='modal'>
			{ReactDOM.createPortal(
				<div className='backdrop' onClick={closeModal}>
					<img src={fullImg} alt='full screen'></img>
					<button className='close-modal-btn' onClick={closeModal}>
						<img src='/PortfolioPage/images/close.png' alt='close'></img>
					</button>
				</div>,
				document.getElementById('modal')
			)}
		</div>
	);
};
export default Modal;
