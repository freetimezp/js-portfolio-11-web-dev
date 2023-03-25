import React from 'react';

import Section from '../shared/section';
import BlogCard from './blog-card';
import blog1 from '../../images/blogs/blog-thumb-1.jpg';
import blog2 from '../../images/blogs/blog-thumb-2.jpg';
import blog3 from '../../images/blogs/blog-thumb-3.jpg';

import './style.scss';

const Blogs = () => {
    return (
        <Section id="blogs" title="Blogs & Articles" background="dark">
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="John Doe"
                    date="mar 25, 2023"
                    image={blog1}
                    title="Lorem ipsum lure represo"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur."
                />
                <BlogCard
                    user="John Doe"
                    date="mar 25, 2023"
                    image={blog2}
                    title="Lorem ipsum lure represo"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur."
                />
                <BlogCard
                    user="John Doe"
                    date="mar 25, 2023"
                    image={blog3}
                    title="Lorem ipsum lure represo"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur."
                />
            </div>
        </Section>
    );
}

export default Blogs;
