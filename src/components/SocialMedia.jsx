import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.facebook.com/edwald.pericleskeeley/">
                <FaFacebookF />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/edwald-pericles-keeley/">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href='https://github.com/edwaldkeeley'>
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};


export default SocialMedia;
