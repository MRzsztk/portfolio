import React from "react";
import {Link} from "react-router-dom";

import "./style.css";

export default function Home() {
    return(
        <>
            <div>
                <h1>test heading</h1>
                <br/>
                <Link to={"/about"}>Go to About</Link>
            </div>
        </>
    );
}