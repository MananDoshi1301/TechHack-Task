import React from 'react';
import styles from './whyUs.module.css';
import whyUsImg from '../../../Images/whyUs1.jpg'
import AOS from "aos";
AOS.init();

const WhyUs = () => {
  const text = [
    {data:'We have zero pre-recorded sessions and committed to the practical based approach.', time:1000},
    {data:"Throughout the course, you will involve in numerous real time projects of real start-ups and get global standard exposure.", time:1050},
    {data:"We will handhold you at each and every step with our 24/7 expert support.", time:1100},
    {data:"Weekly practical and assignments will be provided for better sanctity.", time:1150},
    {data:"Our mentors have an average experience of 3+ years and they have worked with top global firms such as Requestee, Lazyhackers and many more.", time:1200},
  ]
  return (
    <div className='mainContainer'>
      <div className='container my-5'>
        <div className={`display-1 text-center ${styles.whyUsHead} my-3`} data-aos="fade-down" data-aos-delay={1300}>
          Why Us?
        </div>
        <div className='row'>
          <div className={`col-lg-6`}>
            <img className={`img-fluid`} src={whyUsImg} alt='' />
          </div>
          <div className={`col-lg-6 fs-5 ${styles.whyUsContent} d-flex flex-column justify-content-around`}>
            {text.map((text, key)=>{
              return (
                <div key={key} data-aos="fade-left" data-aos-delay={text.time}>{text.data}</div>    
              )
            })}                                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
