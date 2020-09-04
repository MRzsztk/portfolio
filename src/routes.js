import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./index.css"

//pages imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import AddPost from "./pages/AddPost";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/posts" exact component={Blog} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/posts/create" exact component={AddPost}/>
        </BrowserRouter>
    );
}