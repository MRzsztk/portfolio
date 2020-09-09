import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import './style.css'

export default function Login() {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const handleLogin = async () => {
        try {
            const { data } = await api.post("/login", {
                username, password
            });
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            localStorage.clear()
            localStorage.setItem('token', data?.token)
            history.push('/posts/create')
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
    <div className="page">
        <Navbar />
        <div className="login">
            <form className="login-form">
                <h3 className="margin-5">Enter administrative zone</h3>
                <input type="text" className="" placeholder="username" required onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className="" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
                <button className="btn-login" type="button" onClick={() => handleLogin()}>LOG IN</button>
                {error && <span>{error?.message}</span>}
            </form>
        </div>
        <Footer />
    </div>  
    </>);
}