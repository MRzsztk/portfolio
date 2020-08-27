import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./index.css"

//pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
        </BrowserRouter>
    );
}