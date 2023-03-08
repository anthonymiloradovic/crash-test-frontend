import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../pages/AddLocation';

function LatestImage() {
  const { latestPost, setLatestPost } = useContext(AppContext);
  const [latestInfo, setLatestInfo] = useState({ title: "", description: "", price: "" });

  useEffect(() => {
    fetch("http://localhost:3000/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url);
        setLatestInfo({ 
            title: data.title, 
            description: data.description, 
            price: data.price });
      })
      .catch((error) => console.error(error));
  }, [latestPost]);

  return (
    <div>
      <h2>{latestInfo.title}</h2>
      <p>{latestInfo.description}</p>
      <h3>{latestInfo.price}</h3>
      <img src={latestPost} alt="latest post" className="latest-image"/>
    </div>
  )
}

export default LatestImage;
