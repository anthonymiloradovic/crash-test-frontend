import React from 'react';
import Navbar from '../components/Navbar';
import Effect from '../components/Effect';
import { ParallaxProvider } from 'react-scroll-parallax';

const About = () => {
    return (

        <div>
            <Navbar/>
            <ParallaxProvider>
           <Effect/>
           </ParallaxProvider>
        </div>
    );
};

export default About;