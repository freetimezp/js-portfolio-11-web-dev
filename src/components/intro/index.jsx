import React from 'react';

import cloud from '../../images/cloud.png';
import cloudSoft from '../../images/cloud-soft.png';

import './style.scss';

const Intro = () => {
  return (
    <div className='intro-section'>
      <div className="vector-bg" id="parallax"></div>

      <img src={cloud} alt="intro" className='cloud' />
      <img src={cloudSoft} alt="intro" className='cloud-soft cloud' />

      <div className="content">

      </div>
    </div>
  );
}

export default Intro;
