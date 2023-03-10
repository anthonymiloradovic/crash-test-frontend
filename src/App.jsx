import React, { useState, useEffect } from 'react';
import Routes from './components/Routes';
import { UidContext } from './components/Routes/AppContext';
import axios from 'axios';

import { createRoot } from 'react-dom/client';

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:3000/member-data",
          withCredentials: true
        });
        console.log(res);
        setUid(res.data.user);
      } catch (err) {
        console.log("no token", err);
      }
    };
    fetchToken();
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
export default App;
