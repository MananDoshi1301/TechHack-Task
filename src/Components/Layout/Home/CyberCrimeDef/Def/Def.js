import React from 'react';
import CrimeChart from './CrimeChart';
import styles from './def.module.css';
import defImg from '../../../../Images/def.jpg';
import AOS from "aos";
AOS.init();

const Def = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={defImg} alt='' className='img-fluid' />
          </div>
          <div className='col-lg-6'>
            <div className={`${styles.defHead} display-2`}>
              What is CyberCrime?
            </div>
            <div className={`fs-5 ${styles.defContent}`}>
              Cybercrime, or computer crime, is a crime that involves a computer
              and a network. The computer may have been used in the commission
              of a crime, or it may be the target.
            </div>
            <div className='row mt-5'>
              <div className='col-lg-5'>
                <div className={`${styles.defHead} display-4`} data-aos="fade-down" data-aos-delay={950}>Rate?</div>
                <div className={`fs-5 ${styles.defContent}`} data-aos="fade-right" data-aos-delay={800}>There is an increasing rate in CyberCrime every year. So it clearly explains the need for people who can stop CyberCrime</div>
              </div>
              <div className='col-lg-7' data-aos="fade-left" data-aos-delay={850}>
                <CrimeChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Def;
