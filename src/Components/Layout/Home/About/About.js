import React from 'react';
import styles from './about.module.css';
import whyUsImg from '../../../Images/whyUs1.jpg';

const About = () => {
  return (
    <div>
      <div className='container my-5'>
        <div className={`display-1 text-center ${styles.aboutHead}`}>
          Start Your Career With THT!
        </div>
        <div className={`row`}>
          <div
            className={`col-lg-12 ${styles.aboutText} fs-2 text-center mt-3`}
          >
            <span className=''>TechHack</span> is the only training firm in
            India to provide regular live training sessions, assured internships
            and over 10 industry projects. We have trained over 800 students in
            the field of cyber security and our students have been recognised by
            the government of India. Our major objective is to create a one stop
            solution for learning Cyber security from scratch.
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className={`display-1 text-center ${styles.aboutHead} my-3`}>
          Why Us?
        </div>
        <div className='row'>
          <div className={`col-lg-6`}>
            <img className={`img-fluid`} src={whyUsImg} alt='' />
          </div>
          <div className={`col-lg-6 fs-3`}>
            We have zero pre-recorded sessions and committed to the practical
            based approach. Throughout the course, you will involve in numerous
            real time projects of real start-ups and get global standard
            exposure. We will handhold you at each and every step with our 24/7
            expert support. Weekly practical and assignments will be provided
            for better sanctity. Our mentors have an average experience of 3+
            years and they have worked with top global firms such as Requestee,
            Lazyhackers and many more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
