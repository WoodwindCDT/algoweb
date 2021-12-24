import React from "react";
import Nav1 from "../components/Nav1"
import AlgorithmDisplay from "../components/Algorithms"
import More from "../components/More";
import Footer from "../components/Footer";
import Svg from '../components/Svg'

const Home = () => {
    return (
      <div>
          <div>
            <div style={{zIndex: '9999'}}>
              <Nav1 />
            </div>
            <div className="svgC">
              <Svg />
            </div>
          </div>
          <div>
            <AlgorithmDisplay />
            <div className="svgC">
              <Svg />
            </div>
          </div>
          <div>
              <More />
          </div>
          <div>
            <Footer />
          </div>
      </div>
    );
  };
  
  export default Home;