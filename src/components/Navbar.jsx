import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <NavLink to="/">
              <img className="logo" src="./public/logo2.png" alt="logo" />
            </NavLink>
          </li>
          <li>
            <ul className="navbar__link">
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/about">A propos</NavLink>
              </li>
              <li>
                <NavLink to="/profil">Profil</NavLink>
              </li>
              <li>
                <NavLink to="/add">FileForm</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

    );
};

export default Navbar;
