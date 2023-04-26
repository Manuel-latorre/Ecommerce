import "./navbar.css";
import React from "react";
import img from "./img/Diseno_sin_titulo-removebg-preview.png";
import cart from "./img/carritoBlanco.png"
import user from "./img/usuarioBlanco.png"

import SearchBar from "./SearchBar/SearchBar";

const NavBar = () =>{
    return(
        <nav>
            <div className="nav-up">
                <img src={img} alt="" className="logo-nav" />
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div>
                <img src={cart} alt=""  className="icon-nav"/>
                <img src={user} alt=""  className="icon-nav"/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;