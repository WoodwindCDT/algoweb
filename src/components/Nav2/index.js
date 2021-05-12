import React from "react";
import {Link} from "react-router-dom";

function Nav2() {
    return (
        <div className="h-container">
            <header className="flex-row">
            <h1>
                <Link to="/">
                    Algo+
                </Link>
            </h1>
            <ul className="flex-row">
                <h2><a href="#res">Resources</a></h2>
                <h2><a href="#contact">Contact Me!</a></h2>
            </ul>
            </header>
        </div>
    );
}

export default Nav2;