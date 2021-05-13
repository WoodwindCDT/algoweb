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
            <p>Images of examples coming soon!</p>
            <p>LoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
            LoremLoremLoremLoremLoremLoremLoremLoremLorem
            </p>
            {/* {pics.map(I)} */}
        </div>
    );
}

export default More;