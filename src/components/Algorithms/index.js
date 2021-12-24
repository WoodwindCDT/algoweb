import React from "react";
import { algorithms } from "../JSON/alg";

class AlgorithmDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.handleDisplayClick = this.handleDisplayClick.bind(this);
      this.state = {type: 'javascript'};
    }

    handleDisplayClick(event) {
        this.setState({type: event.target.value});
    }

    render() {
        const lang = ['javascript', 'java'];
        const type = this.state.type;
        const algs = algorithms.map((alg) =>
        {
        if (alg.T === type) {
            return <>
            <div key={alg}>
                <div className="t-container1">
                    <div className="t-text">
                        <p className="q-text">
                            Q{alg.id} : {alg.Q}
                        </p>
                        <hr />
                        <p className="a-text">
                            A: {alg.A}
                        </p>
                    </div>
                </div>
            </div>
            </>
            }
        }
    );
    return (
        <>
            <div className="box">    
                <select className="boxc" value={this.state.value} onChange={this.handleDisplayClick}>
                    {lang.map((types) => <option>{types}</option>)}
                </select>
            </div>
            {algs}
        </>
      );
    }
}

export default AlgorithmDisplay;