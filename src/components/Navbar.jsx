import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar">
        <ul className="navbar__list">

            <li>
            <NavLink to="/">
                <img className="logo" src="./public/logo.png" alt="logo" />
            </NavLink>
            </li>
        <li>

                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/about">A propos</NavLink>
                </li>
               
        </ul>
      </nav>
       
    );
};

export default Navbar;
