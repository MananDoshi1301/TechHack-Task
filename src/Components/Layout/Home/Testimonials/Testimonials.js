import React from 'react'
import TestimonialCarousel from './TestimonialCarousel/TestimonialCarousel';
import styles from './testimonials.module.css';
import AOS from "aos";
AOS.init();

const Testimonials = () => {
    return (
        <div className='mainContainer'>
            <div className={`${styles.testimonialsHead} display-1 text-center my-5`} data-aos="fade-down" data-aos-delay={1500}>What our Alumni's Say...</div>
            <TestimonialCarousel />
        </div>
    )
}

export default Testimonials
