import React from "react";
import {Link} from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SendMeAMessage from "../../components/SendMeAMessage"

import LinkedIn from "../../assets/linkedin-logo-png-1825.png";
import Github from "../../assets/github-logo.png";
import Fb from "../../assets/thumb-down.png";

import "./style.css";

export default function Contact() {
    return(
        <div className="page">
            <Navbar />
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-slot">
                        <img src={LinkedIn} className="linkedin" alt='linkedin' />
                        <a href={'https://www.linkedin.com/in/malgorzata-rzeszutek'}>linkedin.com/in/<b>malgorzata-rzeszutek</b></a>
                    </div>
                    <div className="contact-slot">
                    <img src={Github} className="github" alt='github' />
                    <a href={'https://github.com/MRzsztk'}>github.com/<b>MRzsztk</b></a></div>
                    <div className="contact-slot">
                    <img src={Fb} className="fb" alt='facebook' />
                    <a href={'https://www.facebook.com/rzeszutek.malgorzata'}>facebook.com/<b>rzeszutek.malgorzata</b></a>
                    </div>
                    <h2 className="VT323">*** OR ***</h2>
                <SendMeAMessage />
                </div>
            </div>
            <Footer />
            <Link to="/login" className="login-link">⇥ Enter.</Link>
        </div>
    );
}