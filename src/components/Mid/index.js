import React from "react";

import Welcome from "../Welcome";
import Slot from "../Slot";
import Game from "../Game";

import Stack1 from "../../assets/stack1.svg";
import Stack2 from "../../assets/stack2.svg";
import Muscle from "../../assets/muscle.png";

import "./style.css"

export default function Main () {
    return(
        <main className="main">
           <Welcome />
           <div className="slot-container">
           <Slot title="coding." text1="I’m a freshly graduated Full Stack Web Developer." pic={Stack1} />
           <Slot title="other stuff." text1="I have also done some electronics along with some ERP stuff." pic={Stack2} />
           <Slot title="effectiveness." text1="I love working overtime, learning new things and I offer some kickass Polish labor!" pic={Muscle} />
           </div>
           <div className="game-comtainer">
           <Game />
           </div>
        </main>
    );
}