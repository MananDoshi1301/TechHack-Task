import React from 'react';
import logo from '../../../Images/logoblack1.png';

const Footer = () => {
  return (
    <div>
      <div className='container-fluid p-0 m-0 mt-5'>
        <div className='mx-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='display-2'>TechHack Technologies</div>
            <div>
              <img src={logo} alt='' />
            </div>
          </div>
          <div className=''>
            <div className='d-flex'>
                <ul>
                    Pages
                    <li>Home</li>
                    <li>Training</li>
                    <li>Webinars</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    Courses
                    <li>TechHack's Certified Ethical Hacker</li>
                    <li>Web Application Penetration Testing</li>
                    <li>Malware Analysis & Reverse Engineering</li>
                    <li>Android Penetration Testing</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
