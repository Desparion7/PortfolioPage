import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
	const [startTyping, setStartTyping] = useState(false);

	const typing = () => {
		setStartTyping(true);
		const audio = document.querySelector('#audio-keys');
		audio.play();
	};

	return (
		<div className='home'>
			<audio src='/PortfolioPage/images/keys.mp3' id='audio-keys'></audio>
			<div className='home__container scale-up-center '>
				{!startTyping && (
					<div className='home__start'>
						<button className='home__start-btn' onClick={typing}>
							Let's start!
						</button>
					</div>
				)}

				{startTyping && (
					<>
						<div className='home__myphoto'>
							<img
								src='./images/my-photo.jpg'
								alt='porfilphoto'
								className='opacity-class'
							></img>
						</div>
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.changeDelay(120)
									.typeString(
										`Welcome on my page! My name is Mateusz. I am a beginner front-end web developer. Check out my page to  know me better.`
									)
									.start();
							}}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
