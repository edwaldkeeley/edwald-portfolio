import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';

const abouts = [
	{
		title: 'Web Developer',
		description: 'I am a Good web developer',
		imgUrl: images.about01,
	},
	{
		title: 'Web Designer',
		description: 'I am a Good web Designer',
		imgUrl: images.about02,
	},
	{
		title: 'UI/UX Designer',
		description: 'I am a Good UI/UX Designer',
		imgUrl: images.about03,
	},
	{
		title: 'Web Animations',
		description: 'I am a Good Web Animator',
		imgUrl: images.about04,
	},
];

const About = () => {
	
	return (
		<>
			<h2 className='head-text'>
				I Know That <span> Good Development <br></br> Means </span>{' '}
				<span>Good Business</span>
			</h2>

			<div className='app__profile'>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='app__profile-item'
						key={about.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className='bold-text' style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className='p-text' style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default About;
