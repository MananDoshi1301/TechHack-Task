import React from 'react'
import Nav from '../Common/Nav/Nav';
import About from './About/About';
import Banner from './Banner/Banner'

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />  
            <About />
        </div>
    )
}

export default Home
