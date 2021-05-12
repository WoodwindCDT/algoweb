import React from "react";
import {Link} from "react-router-dom";

function Nav1() {
    return (
        <div id="top" className="h-container">
            <header className="flex-row">
            <h1>
                <Link to="/">
                    Algo+
                </Link>
            </h1>
            <ul className="flex-row">
                <h2><a href="#algo">Algorithms</a></h2>
                <h2><a href="#more">More</a></h2>
                <h2>
                    <Link to="about">About</Link>
                </h2>
            </ul>
            </header>
        </div>
    );
}

export default Nav1;