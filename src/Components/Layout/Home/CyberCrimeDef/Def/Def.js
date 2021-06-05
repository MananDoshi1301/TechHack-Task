import React from 'react';
import styles from './def.module.css';
import defImg from '../../../../Images/def.jpg';

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
            <div className='fs-4'>
              Cybercrime, or computer crime, is a crime that involves a computer
              and a network. The computer may have been used in the commission
              of a crime, or it may be the target.
            </div>
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Def;
