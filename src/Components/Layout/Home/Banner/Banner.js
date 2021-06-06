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
