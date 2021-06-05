import React from 'react';
import bannerImg from '../../../Images/pic.jpg';
import styles from './banner.module.css';

const Banner = () => {
  return (
    <div>
      <div className="container-fluid">
          <div className="row">
              <div className={`col-lg-5`}></div>
              <div className="col-lg-7">
                  <img src={bannerImg} className='img-fluid' />
              </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;
