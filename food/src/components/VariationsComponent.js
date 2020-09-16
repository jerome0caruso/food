import React from 'react';
import './css/Variations.css';
import pic from './testpicfood.jpg';

function Variations() {
    return (
        <div className="small-photo">
            <img src={pic} alt="small food" />
            <h4>Recipe Variation</h4>
            <h6>By: Billy Rothschild</h6>
            <p>This is a another version of this great recipe!  Try this instead....,This is a another version of this great recipe!  Try this instead.... </p>
        </div >
    );
}

export default Variations;