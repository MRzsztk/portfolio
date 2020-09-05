import React from "react";

import Arduino from "../../assets/arduino.png";
import Cat from "../../assets/pixel-cat.png";
import Coffee from "../../assets/coffee.gif";
import Rick from "../../assets/rick.gif";

import "./style.css"

export default function AboutMe () {
    return(
        <div className="about">
            <div className="about-container">
                <p className="about-paragraph">I'm a fresh Web Dev Bootcamp graduate based in Berlin.</p>
                <ul className="list">
                    <li><img className="list-img" src={Coffee} alt="coffee" /></li>
                    <li><img className="list-img" src={Arduino} alt="arduino" /></li>
                    <li><img className="list-img" src={Rick} alt="rick" /></li>
                    <li><img className="list-img" src={Cat} alt="titus" /></li>
                </ul>
            </div>
        </div>
    );
}