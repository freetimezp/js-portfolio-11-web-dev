import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import Section from '../shared/section';
import TechIcons from '../../images/tech-icons.png';
import CallToAction from '../shared/CallToAction';

import './style.scss';

const index = () => {
    return (
        <Section background="dark" id="skills">
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img src={TechIcons} alt="skills" />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rerum 
                        animi ducimus excepturi, voluptatum in accusamus officiis! Illum illo 
                        unde nulla impedit placeat beatae iste quaerat, delectus, corporis 
                        nihil assumenda, aliquam ad deleniti quae eveniet quam quisquam 
                        asperiores in? Nulla quasi vel suscipit quaerat similique, dolore 
                        placeat odit consequatur perferendis inventore possimus beatae eaque 
                        voluptas aliquid autem, nostrum molestias cumque.
                    </p>
                    <CallToAction text="Download CS" icon={<AiOutlineCloudDownload />} />
                </div>
            </div>
        </Section>
    );
}

export default index;
