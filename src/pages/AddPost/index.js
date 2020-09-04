import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Timeline from "../../components/Timeline";
import api from "../../services/api";

import "./style.css";

export default function AddPost() {
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [error, setError] = useState(null)

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
        if (!token) {
            history.push('/login')
        }
    }, [token])
    return(
        <div className="page">
            <Navbar />
            <p>the spot to add the editor</p>
            <p>my token: {token}</p>
            <Link to={'/logout'}>Log out.</Link>
            <Timeline />
            <Footer />
        </div>
    );
}
