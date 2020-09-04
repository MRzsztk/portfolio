import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Timeline from "../../components/Timeline";
import api from "../../services/api";

import "./style.css";

export default function Blog() {
    return(
        <div className="page">
            <Navbar />
            <Timeline />
            <Footer />
            <Link to="/login" className="login-link">⇥ Enter.</Link>
        </div>
    );
}