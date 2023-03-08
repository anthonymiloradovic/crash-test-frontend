import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CitySelector from '../components/CitySelector';


const Home = () => {
    
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div>
     <CitySelector />
    </div>
        </div>
    );
};

export default Home;