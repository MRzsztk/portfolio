import React from "react";
import {Link} from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Mid from "../../components/Mid";

import "./style.css";

export default function Home() {
    return(
        <div className="page">
            <Navbar />
            <Mid />
            <Footer />
        </div>
    );
}