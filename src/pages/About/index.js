import React from "react";
import {Link} from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutMe from "../../components/AboutMe"

import "./style.css";

export default function About() {
    return(
        <div className="page">
        <Navbar />
            <AboutMe />
        <Footer />
        <Link to="/login" className="login-link">⇥ Enter.</Link>
        </div>
    );
}