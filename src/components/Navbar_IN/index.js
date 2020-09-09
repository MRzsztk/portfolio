import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/logo-stroke.svg";

import "./style.css";

export default function Navbar() {
    return(
        <header className="navbar">
            <div className="nav">
                <img className="logo" src={Logo} alt="MRzsztk_logo" />
                <div className="nav-container">
                    <Link className="nav-link" to={"/posts/create"}>blog mgmt</Link>
                    <Link className="nav-link" to={"/contact/messages"}>see messages</Link>
                </div>
            </div>
        </header>
    );
}