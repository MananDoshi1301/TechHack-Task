import React from 'react';
import styles from './whyUs.module.css';
import whyUsImg from '../../../Images/whyUs1.jpg'

const WhyUs = () => {
  return (
    <div>
      <div className='container my-5'>
        <div className={`display-1 text-center ${styles.whyUsHead} my-3`}>
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

export default WhyUs;
