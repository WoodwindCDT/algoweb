import ReactDOM from "react-dom";
import React, { Component } from "react";
import { algorithms } from "../JSON/alg";

// class App extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         filterCode: [],
//         probs: props.probs
//     };
// }

// onResetArray = () => {
//     this.setState({ filterCode: [] });
// };

// filterJava = () => {
//     const { probs } = this.state;
//     const java = probs.filter(code => code.T.includes("java"));
//     this.setState({ filterCode: java });
// };

// filterJavaScript = () => {
//     const { probs } = this.state;
//     const javascript = probs.filter(code => code.T.includes("javascript"));
//     this.setState({ filterCode: javascript });
// };

// render() {
//     const {probs, filterCode} = this.state;
//         return (
//         <div className="container">
//             <button event-key="reset-probs" onClick={this.onResetArray}>
//             All Code
//             </button>

//             <button event-key="javascript-probs" onClick={this.filterJavaScript}>
//             JavaScript
//             </button>

//             <button event-key="java-probs" onClick={this.filterJava}>
//             Java
//             </button>

//             <Algorithms probs={filterCode.length > 0 ? filterCode : probs} />
//         </div>
//         );
//     }
// }

// const Algorithms = ({ probs }) => {
//     return (
//         <div id="algo" className="t-container flex-row">
//         <h1 className="t-head">Practice Algorithm Questions w/ Answers</h1>
//             {probs.map(algorithms => <div>{algorithms.T}</div>)}
//         </div>
//     );
// }

const A = (h, i, x) => {
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
                {h.T}
            </div>
        </div>
    );
};

const Algorithms = ({ probs }) => {
    return (
        <div id="algo" className="t-container flex-row">
        <h1 className="t-head">Practice Algorithm Questions w/ Answers</h1>
        {algorithms.map(A)}
        </div>
    );
}

export default Algorithms;