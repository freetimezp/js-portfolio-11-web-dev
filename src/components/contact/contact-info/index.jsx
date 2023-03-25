import React from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

import './style.scss';

const ContactInfo = () => {
    return (
        <div className='contact-info-box'> 
            <h4>Contact Information</h4>
            <p>I would be happy to answer anu questions you may have about freelance writing or content marketing.</p>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className='text'>+38 044 123-45-67</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className='text'>portfolio@gmail.com</span>
            </div>
        </div>
    );
}

export default ContactInfo;
