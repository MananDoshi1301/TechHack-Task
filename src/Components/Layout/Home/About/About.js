import React from 'react';
import styles from './about.module.css';
import AOS from "aos";
AOS.init();

const About = () => {
  return (
    <div className='mainContainer'>
      <div className='container my-5'>
        <div className={`display-1 text-center ${styles.aboutHead}`} data-aos="fade-down" data-aos-delay={1500}>
          Start Your Career With THT!
        </div>
        <div className={`row`}>
          <div
            className={`col-lg-12 ${styles.aboutText} fs-3 text-center mt-3`}
            data-aos="fade-right" data-aos-delay={1000}
          >
            <span className={`fs-1`}><ins>TechHack</ins></span> is the only training firm in
            India to provide regular live training sessions, assured internships
            and over 10 industry projects. We have trained over 800 students in
            the field of cyber security and our students have been recognised by
            the government of India. Our major objective is to create a one stop
            solution for learning Cyber security from scratch.
          </div>
        </div>
      </div>      
    </div>
  );
};

export default About;
