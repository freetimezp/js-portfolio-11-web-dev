import React from 'react';

import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';

import Navigation from './navigation-bar';

import './style.scss';

const Intro = () => {
  return (
    <div className='intro-section'>
      <div className="vector-bg" id="parallax"></div>

      <img src={cloud} alt="intro" className='cloud' />
      <img src={cloudSoft} alt="intro" className='cloud-soft cloud' />

      <div className="content">
        <Navigation />
      </div>
    </div>
  );
}

export default Intro;
