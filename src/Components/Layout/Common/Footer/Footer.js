import React from 'react';
import styles from './footer.module.css';
import logo from '../../../Images/logoblack1.png';
import backgroundWave from '../../../Images/wave.svg';

const Footer = () => {
  const footerList = [
    {
      ul: [
        'Page',
        [
          { link: 'Home' },
          { link: 'Training' },
          { link: 'Webinar' },
          { link: 'Contact' },
        ],
      ],
    },
    {
      ul: [
        'Courses',
        [
          { link: "TechHack's Certified Ethical Hacker" },
          { link: 'Web Application Penetration Testing' },
          { link: 'Malware Analysis & Reverse Engineering' },
          { link: 'Android Penetration Testing' },
        ],
      ],
    },
  ];

  const socialLinks = [
    {icon:'fab fa-youtube', link:'', color:'#FF0000'},
    {icon:'fab fa-linkedin-in', link:'', color:'#0077b5'},
    {icon:'fab fa-instagram', link:'', color:'#E1306C'},
    {icon:'far fa-envelope', link:'', color:'#000000'},
  ]

  return (
    <div className='mainContainer'>
      <div className='container-fluid p-0 m-0 mt-5' style={{
        backgroundSize:'cover',
        backgroundImage: `url(${backgroundWave})`,
        backgroundPosition: 'center center',
      }}>
        <div className='mx-5'>
          
          <div className='d-flex justify-content-between align-items-center'>
            <div className={`display-2 ${styles.footerHead}`}>TechHack Technologies</div>
            <div>
              <img src={logo} alt='' />
            </div>
          </div>
          
          <div>
            <div className='d-flex'>
              {footerList.map((list, key) => {
                return (
                  <ul key={key} className={``} style={{listStyleType:'none'}}>
                    <div className={`fs-2 fw-bold ${styles.listHead}`} style={{color:'#2C4E9F'}}>{list.ul[0]}</div>
                    {list.ul[1].map((listItem, key) => {
                      return <li className={`fs-5 ${styles.listItem}`} key={key}>{listItem.link}</li>;
                    })}
                  </ul>
                );
              })}
            </div>
          </div>

          <div>
              <div className='container-fluid'>
                <div className="row">
                <div className={`col-lg-6 d-flex align-items-center fs-3 ${styles.listHead} fw-bold`} style={{color:'#2C4E9F'}}>&copy; TechHack Technologies 2021 All Rights Reserved.</div>
                <div className="col-lg-2"></div>
                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
                  <div className={`fs-3 ${styles.listHead} fw-bold`} style={{color:'#2C4E9F'}}>Follow Us:</div>
                  {socialLinks.map((link, key)=>{
                    return (
                      <div key={key} className={`${styles.iconDiv}`}><i className={`${link.icon} fa-3x`} style={{color:link.color}}></i></div>
                    )
                  })}                  
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
