import React from 'react';
import styles from './weoffer.module.css';
import weOfferImg from '../../../Images/weOffer.jpg';

const Weoffer = () => {
  const data = [
    {title:'Internship Opportunities',text:'TechHack provides Two assured Internship opportunities and over 10 industry projects simultaneously with the regular live training.',icon:''},
    {title:'Freelancing Opportunities',text:'Each training program is packed with tons of Internship and freelancing opportunities.',icon:''},
    {title:'Start-To-End Courses',text:'We offer courses right from extreme beginner level up-to super advanced.',icon:''},
  ]
  return (
    <div className='mainContainer'>
      <div className='container'>
        <div className={`${styles.weOfferTitle} display-1`} >What We Have To Offer!</div>
        <div className='row'>
          <div className='col-lg-6'>
            <ul className='d-flex flex-column justify-content-evenly h-100' style={{listStyleType:'none'}}>
              {data.map((data, key)=>(
                <li key={key}>
                <div className={`fs-2 ${styles.weOfferTitle}`}>{data.title}</div>
                <div className={`fs-5 ${styles.weOfferText}`}>{data.text}</div>
              </li>
              ))}                            
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
