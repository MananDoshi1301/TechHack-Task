import React from 'react';
import bannerImg from '../../../Images/pic.jpg';
import './Banner.css'
import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="banner row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <img src={bannerImg} alt="" className='img-fluid'/>
                </div>
            </div>                        
        </div>
    )
}

export default Banner
