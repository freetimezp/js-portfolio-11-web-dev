import React from 'react';
import { FaYoutube, FaGithub, FaLinkedinIn, FaStackOverflow, FaInstagram } from 'react-icons/fa';

import Section from '../shared/section';
import Logo from '../../images/logo.png';
import SocialIcon from './social-icon';

import { scrollToSection } from '../utils/helpers';

import './style.scss';

const Footer = () => {
    return (
        <Section background="dark" className="footer">
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="footer-menu-items">
                    <li className="footer-menu-item" onClick={() => scrollToSection("home")}>Home</li>
                    <li className="footer-menu-item" onClick={() => scrollToSection("skills")}>Skills</li>
                    <li className="footer-menu-item" onClick={() => scrollToSection("portfolio")}>Portfolio</li>
                    <li className="footer-menu-item" onClick={() => scrollToSection("blogs")}>Blogs & Articles</li>
                    <li className="footer-menu-item" onClick={() => scrollToSection("contact")}>Contact Me</li>
                </ul>
                <div className="social-icons">
                    <SocialIcon color="#ff0000" icon={<FaYoutube />} link="https://www.youtube.com/" />
                    <SocialIcon color="#0d2636" icon={<FaGithub />} link="https://www.github.com/" />
                    <SocialIcon color="#f2740d" icon={<FaLinkedinIn />} link="https://www.linkedin.com/" />
                    <SocialIcon color="#e84c88" icon={<FaStackOverflow />} link="https://stackoverflow.com/" />
                    <SocialIcon color="#0a66c2" icon={<FaInstagram />} link="https://www.instagram.com/" />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Freetime | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Footer;
