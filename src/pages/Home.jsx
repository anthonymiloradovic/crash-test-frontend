import React from 'react';
import Navbar from '../components/Navbar';
import Parallax from '../components/Parallax';
import CardMain from '../components/CardMain';


const Home = () => {
    return (
      <div>
      <Parallax>
        <Navbar className="navbar__parallax"/>
      </Parallax>
      <CardMain />
      </div>
    );
  };



export default Home;
