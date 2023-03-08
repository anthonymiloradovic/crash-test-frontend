


import { useState, useEffect } from "react";
import './card.css';


const cities = [
  "Paris", "Bordeaux", "Lille", "Barcelone", "Berlin", "Londres",
  "Rome", "Madrid", "New York", "Los Angeles", "Tokyo", "Sydney",
  "Rio de Janeiro", "Buenos Aires", "Amsterdam", "Dubai", "Singapour",
  "Shanghai", "Moscou", "Toronto", "Vancouver", "Montréal", "Québec",
  "San Francisco", "Miami", "Mexico", "São Paulo", "Le Caire",
  "Johannesburg", "Istanbul"
];

function Card() {
  const [city, setCity] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      const autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("search")
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const city = place.address_components.find((component) =>
          component.types.includes("locality")
        );
        const region = place.address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        );
        const country = place.address_components.find((component) =>
          component.types.includes("country")
        );
        if (city && region && country) {
          setCity(`${city.long_name}, ${region.short_name}, ${country.short_name}`);
        }
      });
    });
  }, []);

  useEffect(() => {
    const newCards = Array.from({ length: 30 }, (_, i) => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const includeCard = randomCity.toLowerCase().includes(city.toLowerCase());
      return includeCard && (
        <div
          className="card"
          key={i}
          data-city={randomCity}
          onClick={() => setCity(randomCity)}
        >
          <img
            src="https://mmf.logic-immo.com/mmf/ads/photo-crop-368x250/63b/f/f22a4eaa-dcf2-468d-922a-487915a231c0.jpg"
            className="<card-img-top>"
            alt="Maison"
            style={{ width: "100%", height: "60%" }}

          />
          <div className="card-body">
            <h5 className="card-title">Maison Piscine à vendre à  {randomCity} </h5>
            <p className="card-text">1 000000 €.</p>
           <a href="#" className="btn btn-primary">
              En savoir plus
            </a>
          </div>
        </div>
      );
    });
    setCards(newCards);
  }, [city]);
  

  return (
    <div>
      <label htmlFor="search">Recherche de ville :</label>
      <input
        type="text"
        id="search"
        value={city}
      
        onChange={(e) => setCity(e.target.value)}
      />

<div id="cards-container">{cards}</div>
</div>
);
}

export default Card;