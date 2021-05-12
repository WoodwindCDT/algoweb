  
import React from "react";
import Nav1 from "../components/Nav1"
import Algorithms from "../components/Algorithms"
import More from "../components/More";
import Footer from "../components/Footer";

const Home = () => {
    return (
      <div>
          <div>
            <Nav1 />
          </div>
          <div>
            <Algorithms />
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