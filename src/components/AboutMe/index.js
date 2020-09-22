import React from "react";

import Arduino from "../../assets/arduino.png";
import Cat from "../../assets/pixel-cat.png";
import Coffee from "../../assets/coffee.gif";
import Rick from "../../assets/rick.gif";
import Certified from "../../assets/certified.png";
import Balmer from "../../assets/balmer_curve.png";

import "./style.css"

export default function AboutMe () {
    return(
        <div className="about">
            <div className="about-container">
                <p className="about-paragraph">Hello. I'm <span className="VT323">Gosha</span>, a fresh Web Dev Bootcamp graduate based in Berlin.</p>
                <img className="badge" src={Certified} alt="certified-badge" />
                <a className='certificate VT323' target="_blank" rel="noopener noreferrer" href="https://www.credential.net/c67927d0-7261-4bfe-bae8-334116a965c0#gs.f5kofx">*SEE MY CERTIFICATE*</a>
                <hr />
                <h1 className='VT323'><u>MY PROJECTS</u></h1>
                <h2 className='title VT323'>Restaurant FastPay</h2>
                <a className="project-link" href="https://restfastpay.vercel.app/"><b>restfastpay</b>.vercel.app</a>
                <p className="project-desc">A mobile web app for automated restaurant checkout and contactless (mock:) payment accessible through a QR code. Done with Carlos Ziegler.</p>
                <i className="project-stack">(HTML5, CSS, node.js, MongoDB, React, JSON web token, qrcode.react, lotties)</i>
                ***
                <h2 className='title VT323'>waski.net</h2>
                <a className="project-link" href="https://waskinet-client.vercel.app/"><b>waski.net</b>.vercel.app</a>
                <p className="project-desc">A prototype for my friend's business' website - an Internet/landline provider, also offering hosting services. The website features an administrator's end, where he can read the messages, write news and manage pricelists.</p>
                <i className="project-stack">(HTML5, CSS, node.js, MongoDB, React, JSON web token, elbow grease & some free time)</i>
                ***
                <h2 className='title VT323'>PlantSwap</h2>
                <a className="project-link" href="https://plantexchange.herokuapp.com/"><b>plantexchange</b>.herokuapp.com</a>
                <p className="project-desc">A cuttings exchange platform for plant lovers. Done with Nina Smolnikova.</p>
                <i className="project-stack">(HTML5, CSS, Express JS, node.js, MongoDB, handlebars, mapbox & geocoding API)</i>
                ***
                <h2 className='title VT323'>Mellitus Run</h2>
                <a className="project-link" href="https://mrzsztk.github.io/project-Mellitus-run/">mrzsztk.github.io/<b>project-Mellitus-run</b></a>
                <p className="project-desc">A jump'n'run game with a simple goal of escaping diabetes.</p>
                <i className="project-stack">(HTML5, CSS, JS, p5)</i>
<br />***<br /><br />
...I also enjoy:
                <div className="also">
                <ul className="list">
                    <li>  <img className="list-img" src={Coffee} alt="coffee" /></li>
                    <li>  <img className="list-img" src={Arduino} alt="arduino" /></li>
                    <li>  <img className="list-img" src={Rick} alt="rick" /></li>
                    <li>  <img className="list-img" src={Cat} alt="titus" /></li>
                </ul></div>
                {/* <br />***<br /><br />
                <img className="balmer" src={Balmer} alt="balmer-curve" />
                <br />
                And I'm very much into science. */}
            </div>
        </div>
    );
}