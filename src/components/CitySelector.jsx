import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const allowedCities = ["Paris", "Bordeaux", "Lille"];

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState("");
  const [addresses, setAddresses] = useState([]);

  function handleCityChange(event) {
    setSelectedCity(event.target.value);
  }

  useEffect(() => {
    // Si aucune ville n'est sélectionnée, ne rien faire
    if (!selectedCity) {
      setAddresses([]);
      return;
    }

    // Charger les adresses de la ville sélectionnée
    fetch(`https://nominatim.openstreetmap.org/search?q=${selectedCity}&format=json`)
      .then((response) => response.json())
      .then((data) =>
        setAddresses(
          data.map((result) => ({
            lat: result.lat,
            lng: result.lon,
            text: result.display_name,
          }))
        )
      );
  }, [selectedCity]);

  return (
    <div>
      <label htmlFor="city-select">Sélectionnez votre ville :</label>
      <select id="city-select" value={selectedCity} onChange={handleCityChange}>
        <option value="">-- Choisissez une ville --</option>
        {allowedCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <p>Ville sélectionnée : {selectedCity || "Aucune"}</p>
      {selectedCity && (
        <MapContainer center={[46.52863469527167, 2.4389648437500004]} zoom={5} style={{ height: "300px", width: "350px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {addresses.map((address, index) => (
            <Marker key={index} position={[address.lat, address.lng]}>
              <Popup>{address.text}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export default CitySelector;



