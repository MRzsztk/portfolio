import React from "react";
import {Link} from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import "./style.css";

export default function Contact() {
    return(
        <div className="page">
            <Navbar />
            <div>This is the Contact page.</div>
            <Footer />
        </div>
    );
}