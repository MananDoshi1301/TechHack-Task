import React from 'react';
import bannerImg from '../../../Images/newBackCopy.png';
import './Banner.css'
import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className='container-fluid p-0'>
            <div className={`banner`}
                style={{
                    backgroundSize:'cover',
                    backgroundImage: `url(${bannerImg})`,
                    backgroundPosition: 'center center',
                    width:'100%',
                    height:'600px'
                }}
            />            
        </div>
    )
}

export default Banner
