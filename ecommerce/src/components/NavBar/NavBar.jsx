import "./navbar.css";
import React from "react";
import img from "./img/Diseno_sin_titulo-removebg-preview.png";
import cart from "./img/carritoBlanco.png"
import user from "./img/usuarioBlanco.png"
import SearchBar from "./SearchBar/SearchBar";
import {Link , NavLink} from "react-router-dom";



const NavBar = () =>{
    return(
        <>
        <nav>
            <div className="nav-up">
            <Link to='/'>
                <img src={img} alt="" className="logo-nav" />
                </Link>
                <div className="search-container">
                    <SearchBar/>
                </div>
                <div>
                <Link to='/cart'>
                <img src={cart} alt=""  className="icon-nav"/>
                </Link>
                <Link to='/user'>
                <img src={user} alt=""  className="icon-nav"/>
                </Link>
                </div>
            </div>
        </nav>
            <div className="buton-container">
           <NavLink to='/'><button>Home</button></NavLink>
           <NavLink to='/hombres'><button>Hombres</button></NavLink>
           <NavLink to='/mujeres'><button>Mujeres</button></NavLink>
           <NavLink to='/electronica'><button>Electronica</button></NavLink>
           <NavLink to='/joyas'><button>Joyas</button></NavLink>
            </div>
        </>
    )
}

export default NavBar;