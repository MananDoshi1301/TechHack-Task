import React from 'react';
import Typed from 'react-typed';
import bannerImg from '../../../Images/pic.jpg';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-lg-5`}>
            <div className='d-flex flex-column justify-content-evenly h-100'>
              <div>
                <div className={`${styles.bannerTitle} display-1 `}>
                  TechHack Technologies
                </div>
                <div className={`fs-3 text-muted ${styles.bannerSubTitle}`}>"The place where you hack your future."</div>
              </div>
              {/* <Typed
                strings={['India’s first hands on integrated platform to learn cyber security.',
                  'Get assured Internships & real time projects, 100% live training and zero pre-recorded sessions.',
                  'Begin your cyber security career with the most affordable training in the global market.']}
                typeSpeed={60}
                backSpeed={60}
                backDelay={1200}
                loop
                className="fs-3 word-wrap"
                smartBackspace
              /> */}
            </div>
          </div>
          <div className="col-lg-7">
            <img src={bannerImg} className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
