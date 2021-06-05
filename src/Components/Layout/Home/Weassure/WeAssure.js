import React from 'react';
import styles from './weAssure.module.css';
import liveCurrImg from '../../../Images/liveCurr.jpg';

const WeAssure = () => {
  return (
    <div>
      <div className='container mb-5'>
        <div className={`${styles.weAssureTitle} display-1 text-center`}>
          We Assure You With!
        </div>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='card border-0'>
              <img src={liveCurrImg} className='img-fluid' alt='...' />
              <div className='card-img-overlay'>
                <h5 className='card-title'>100% Live curriculum</h5>
                <p className='card-text'>
                  We have zero pre-recorded sessions and absolutely focused on
                  providing live training. Get answers to all the queries,
                  Attend live practical and experience highly customised
                  curriculum according to your learning skills.
                </p>
                {/* <p className='card-text'>Last updated 3 mins ago</p> */}
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAssure;
