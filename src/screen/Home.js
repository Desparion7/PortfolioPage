import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';

const Home = () => {
	useEffect(() => {
		const cursors = document.querySelectorAll('.Typewriter__cursor');
		cursors.forEach((cursor) => {
			cursor.style.display = 'none';
		});
	});

	return (
		<div className='home'>
			<div className='home__container'>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[0].style.display = 'inline-block';
							})
							.changeDelay(100)
							.typeString('Welcome on my page.')
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[0].style.display = 'none';
							})
							.start();
					}}
				/>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(2400)
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[1].style.display = 'inline-block';
							})
							.changeDelay(100)
							.typeString('My name is Mateusz Woś.')
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[1].style.display = 'none';
							})
							.start();
					}}
				/>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(5700)
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[2].style.display = 'inline-block';
							})
							.changeDelay(100)
							.typeString(`I'm a beginner front-end web developer.`)
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[2].style.display = 'none';
							})
							.start();
					}}
				/>
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(10000)
							.callFunction(() => {
								const cursor = document.querySelectorAll('.Typewriter__cursor');
								cursor[3].style.display = 'inline-block';
							})
							.typeString(`Check out my page to  know me better.`)
							.start();
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
