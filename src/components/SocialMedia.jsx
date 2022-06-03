import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter />
            </div>
            <div>
                <FaFacebookF />
            </div>
            <div>
                <BsInstagram />
            </div>
            <div>
                    <BsLinkedin />
            </div>
            <div>
                <a href='https://github.com/edwaldkeeley'>
                    <BsGithub />
                </a>
            </div>
            <div>
                <BsDribbble />
            </div>
        </div>
    );
};

export default SocialMedia;
