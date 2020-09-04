import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/logo-stroke.svg";

import "./style.css";

export default function Navbar() {
    return(
        <header className="navbar">
            <img className="logo" src={Logo} alt="MRzsztk_logo" />
            <div className="nav-container">
            <Link className="nav-link" to={"/logout"}>log out.</Link>
            <Link className="nav-link" to={"/"}>home</Link>
            </div>
        </header>
    );
}