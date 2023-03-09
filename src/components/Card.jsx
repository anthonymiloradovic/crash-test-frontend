import React from 'react';
import './card.css';
import CitySelector from './CitySelector';

function Card() {
  return (
    <div className="card">
      <img src="https://mmf.logic-immo.com/mmf/ads/photo-crop-368x250/63b/f/f22a4eaa-dcf2-468d-922a-487915a231c0.jpg" alt="Maison à vendre" />
      <h2>Prix : 1 000 000€</h2>
      <p>Ville : Paris</p>
      <div className="block">
        <p>Je vends maison de 2 étages, séjour ouvert avec cuisine, une salle de bain (premier étage) 3 chambres, hall, salle de bain avec salle de bain assez spacieuse. + sous-sol Et nous avons un commerce ouvert qui marche très bien et nous vendons tout à l'intérieur, des machines à kebab, des congélateurs, des tables, des chaises, etc. pour plus de détails écrivez nous en privé merci</p>
        <p>Il est composé de 7 pièce(s)</p>
        <p>Surface : 104m2</p>
        <p>Meublé : oui</p>
        <p>Cave : oui</p>
      </div>
      <CitySelector />
    </div>
  );
}

export default Card;
