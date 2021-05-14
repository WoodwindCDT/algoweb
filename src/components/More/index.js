import React from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { pics } from '../JSON/ex'

// const I = (h, i) => {
//     return(
//         <Parallax y={[20, -30]}>
//         <div key={i}>
//             <div className="t-container">
//                 <div className="t-text">
//                     Image {i+1}: {h.I}
//                 </div>
//             </div>
//         </div>
//         </Parallax>
//     );
// };

function More() {
    return (
        <div id="more" className="t-container h">
        <h1 className="t-head">More Help and Guides!</h1>
            <h2 className="t-text">
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem   
            </h2>
            {/* {pics.map(I)} */}
        </div>
    );
}

export default More;