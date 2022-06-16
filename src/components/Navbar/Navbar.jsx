import React, { useState } from 'react';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleOnClick = e => {
		e.stopPropagation();
		setToggle(prevState => !prevState);
	};

	return (
		<nav className='app__navbar'>
			<div className='app__navber-logo'>
				<img src={images.logo} alt='logo' />
			</div>
			<ul className='app__navbar-links'>
				{['home', 'about', 'contact', 'work', 'skills'].map(item => (
					<li className='app__flex p-text' key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			<div className='app__navbar-menu'>
				<HiMenuAlt4 onClick={e => handleOnClick(e)} />

				{toggle && (
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 300 }}
						transition={{ duration: 1, ease: 'easeOut' }}
					>
						<motion.span
							initial={{ width: 0 }}
							animate={{ width: 60 }}
							transition={{ duration: 0.85, ease: 'easeOut' }}
						>
							<HiX onClick={e => handleOnClick(e)} />
						</motion.span>
						<ul className='app__navbar-links'>
							{['home', 'about','work','skills','contact' ].map(item => (
								<li key={{ item }}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
