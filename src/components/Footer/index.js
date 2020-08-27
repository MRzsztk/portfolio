import React from "react";

import Notgate from "../../assets/notgate.png"

import "./style.css";

export default function Footer() {
    return(
        <footer className="footer">
            <p>Made with much sweat and effort by MRzsztk, 2020</p>
            <img className="gate" src={Notgate} alt="NOT_gate" />
        </footer>
    );
}
