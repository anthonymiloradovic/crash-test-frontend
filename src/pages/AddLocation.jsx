import React from 'react';
import FileForm from '../components/FileForm';
import LatestImage from '../components/LatestImage';
import { createContext, useState } from "react";
import Navbar from '../components/Navbar';


export const AppContext = createContext(null);
const AddLocation = () => {
    {
        const [latestPost, setLatestPost] = useState(AppContext)
        return (
            <div>
                <Navbar />
          <AppContext.Provider value={{ latestPost, setLatestPost}}>
            <div className="App">
              <FileForm />
              <LatestImage />
            </div>
          </AppContext.Provider>
           </div>
        );
      }
};

export default AddLocation;