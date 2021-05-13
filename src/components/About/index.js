import React from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Nav2 from '../Nav2'
import Resources from '../Resources'

function About() {
    return (
        <>
        <h1 className="t-head1">Welcome to the About Section!</h1>
        <Nav2 />
        <Resources />
        <div id="contact" className="t-container">
            <div className="t-text1">
                Hello! My name is Cristian. I created this website as a free platform to view and study frequently asked coding interview questions. Feel free to reach me at the provided links and enjoy!
            </div>
            <div className="flex-row">
                <h3 className="a-link"><a href="https://github.com/WoodwindCDT" target="_blank">Github</a></h3>
                <h3 className="a-link"><a href="https://www.linkedin.com/in/cristian-turbeville-542965164/" target="_blank">LinkedIn</a></h3>
                <h3 className="a-link"><a href="mailto:woodwind.turbeville@gmail.com" target="_blank">Email</a></h3>
            </div>
        </div>
        </>
    );
}

export default About;