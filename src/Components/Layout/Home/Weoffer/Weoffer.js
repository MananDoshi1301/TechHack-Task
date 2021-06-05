import React from 'react';
import styles from './weoffer.module.css';
import weOfferImg from '../../../Images/weOffer.jpg';

const Weoffer = () => {
  return (
    <div>
      <div className='container'>
        <div className={`${styles.weOfferTitle} display-1`} >What We Have To Offer!</div>
        <div className='row'>
          <div className='col-lg-6'>
            <ul className='d-flex flex-column justify-content-evenly h-100'>
              <li>
                TechHack provides Two assured Internship opportunities and over
                10 industry projects simultaneously with the regular live
                training.
              </li>
              <li>
                Each training program is packed with tons of Internship and
                freelancing opportunities.
              </li>
              <li>
                We offer courses right from extreme beginner level up-to super
                advanced.
              </li>
            </ul>
          </div>
          <div className='col-lg-6'>
            <img src={weOfferImg} className='img-fluid' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weoffer;
