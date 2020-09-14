import React from 'react';
import './css/Photo.css';
import pic from './testpicfood.jpg';


function Photo() {
    return (
        <div className="recipe-pic">
            <img src={pic} alt="food" />
        </div>
    );
}

export default Photo;