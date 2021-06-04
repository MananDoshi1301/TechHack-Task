import React, { useState, useEffect } from 'react';
import styles from './nav.module.css';
import logo from '../../../Images/logoblack1.png';

const Nav = () => {
  const [isScrolled, handleScrolled] = useState(false);
  const navTransition = () => {
    if (window.scrollY > 100) {
      handleScrolled(true);
    } else {
      handleScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navTransition);
    return () => window.removeEventListener('scroll', navTransition);
  }, []);

  return (
    <div className={`container-fluid ${isScrolled?styles.scrollNav:''}`} style={{position:'sticky', top:'0'}}>
      <div className={`${styles.custNav} d-flex justify-content-between`}>
        <div className={`${styles.custBrand}`}>
          <img src={logo} alt='' />
        </div>
        <div
          className={`${styles.custLinks} d-flex justify-space-between align-items-center gap-5`}
        >
          <div className={`${styles.custItem}`}>Home</div>
          <div className={`${styles.custItem}`}>Trainings</div>
          <div className={`${styles.custItem}`}>Webinars</div>
          <div className={`${styles.custItem}`}>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
