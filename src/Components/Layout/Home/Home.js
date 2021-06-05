import React from 'react'
import Nav from '../Common/Nav/Nav';
import About from './About/About';
import Banner from './Banner/Banner'
import CyberCrimeDef from './CyberCrimeDef/CyberCrimeDef';
import WeAssure from './Weassure/WeAssure';
import Weoffer from './Weoffer/Weoffer';
import WhyUs from './WhyUs/WhyUs';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />  
            <CyberCrimeDef />
            <About />
            <WhyUs />
            <Weoffer />
            <WeAssure />
            <Testimonials />
        </div>
    )
}

export default Home
