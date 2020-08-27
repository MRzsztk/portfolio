import React from "react";

import "./style.css";

export default function index({title, text1, pic}) {
    return(
        <div className="slot">
            <h3>{title}</h3>
            <p>{text1}</p>
            <img className="slot-img" src={pic} alt="stack_icons" />
        </div>
    );
}

