import React from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { algorithms } from "../JSON/alg";

const C = (h, i) => {
    return(
        <div key={(i)}>
            <div className="t-container1">
                <div className="t-text">
                    <p className="q-text">
                        Q{i+1}: {h.Q}
                    </p>
                        <hr />
                    <p className="a-text">
                        A: {h.A}
                    </p>
                </div>
            </div>
        </div>
    );
};

function Algorithms() {
    return (
        <div id="algo" className="t-container flex-row">
        <h1 className="t-head">Practice Algorithm Questions w/ Answers</h1>
          {algorithms.map(C)}
        </div>
    );
}

export default Algorithms;