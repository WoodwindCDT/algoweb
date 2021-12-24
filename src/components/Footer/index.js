import React from "react";

function Mode(props) {

    if (props === 'black') return(
        <>{alert("Dark Mode is currently in the works :c"),document.body.style.backgroundColor = props}</>
    );
    else {
    return(
        <>
        {
            document.body.style.backgroundColor = props
        }
        </>
    )
    }
}

class Dark extends React.Component {
    constructor(props) {
      super(props);
      this.state = {background: false};
      this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    }
  
    handleBackgroundChange(e) {
      this.setState({background: !this.state.background});
      Mode(this.state.background ? 'white' : 'black');
    }
  
    render() {
      return(
        <button className="darkButton" value={this.state.value} onClick={this.handleBackgroundChange}>Dark Mode {this.state.background ? 'ON' : 'OFF'}</button>
      );
    }
}


function footer() {
    return (
        <>
        <footer>
            <ul className="flex-row-1">
                <h2>Made with <span className="oo">&lt;3</span></h2>
                 
                <Dark />
                <h2 className="bt"><a href="#top">Back-to-Top</a></h2>
            </ul>
        </footer>
        </>
    );
}

export default footer;