import React, { useContext } from 'react';
import Log from '../components/Log';
import { UidContext } from '../components/Routes/AppContext';
import Navbar from '../components/Navbar';


const Profil = () => {
    const uid = useContext(UidContext);
    return (
        <div>
            <Navbar />

        <div className="profil-page">
            
        {uid ? (
            <h1>UPDATE PAGE</h1>
        ) : (

    <div className="log-container">
      <Log signin={false} signup={true} />
      <div className="img-container">
      </div>
      </div>
      )}
      <div>
      <Navbar/>
      </div>
      </div>
 </div>

    );
};

export default Profil;
