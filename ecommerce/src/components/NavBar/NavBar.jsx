import "./navbar.css";
import React from "react";
import img from "./Diseno_sin_titulo-removebg-preview.png";
import { FaCartPlus , FaSearch, FaUser } from "react-icons/fa";


const NavBar = () =>{
    return(
        <nav>
            <div className="nav-up">
                <img src={img} alt="" className="logo-nav" />
                <div className="search-container">
                <input type="text"  className="searchBar" placeholder="busca tu producto..."/>
                <button className="btn-search">
                {/* <FaSearch style={{color: "white"}} size={"20px"}/> */} 
                </button>
                </div>
                <div>
                <FaCartPlus style={{color: "white"}} size={"45px"} className="cart"/> 
                <FaUser style={{color: "white"}} size={"45px"} className="user"/> 
                </div>
            </div>
        </nav>
    )
}

export default NavBar;