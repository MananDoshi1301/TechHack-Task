import React from 'react'
import Nav from '../Common/Nav/Nav';
import About from './About/About';
import Banner from './Banner/Banner'
import CyberCrimeDef from './CyberCrimeDef/CyberCrimeDef';
import Weoffer from './Weoffer/Weoffer';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />  
            <CyberCrimeDef />
            <About />
            <WhyUs />
            <Weoffer />
        </div>
    )
}

export default Home
