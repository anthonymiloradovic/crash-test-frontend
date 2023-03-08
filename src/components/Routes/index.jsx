import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import About from '../../pages/About';
const index = () => {
    return (
        <Router>
         <Routes>
             <Route path="/" element={<Home /> } />
             <Route path="/profil"  element={<Profil /> } />
             <Route path="/about" element={<About />} />
             <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Router>
    );
};

export default index;
