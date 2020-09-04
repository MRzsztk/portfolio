import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import NavbarIn from "../../components/Navbar_IN";
import Footer from "../../components/Footer";
import PostEdit from "../../components/PostEdit";
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
            <NavbarIn />
            <PostEdit />
            <Footer />
            <Link className="login-link" to={'/logout'}>Log out.</Link>
        </div>
    );
}
