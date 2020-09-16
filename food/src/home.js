import React from 'react';
import './home.css';
import NavBar from './components/NavBar';
import Photo from './components/PictureComponent';
import Ingredients from './components/IngredientsComponent';
import Ratings from './components/StarComponent';
import YourPantry from './components/PantryComponent';
import Directions from './components/DirectionsComponent';
import Variations from './components/VariationsComponent';
import Footer from './components/FooterComponent';


function Home() {
    return (
        <div className="main-container">
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="main-photo">
                <Photo />
            </div>
            <div className="ingredients">
                <Ingredients />
                <Ratings />
            </div>
            <div className="your-pantry">
                <YourPantry />
            </div>
            <div className="directions">
                <Directions />
            </div>
            <div className="variations">
                <Variations />
                <Variations />
                <Variations />
            </div>
            <div className="footer">
                <Footer />
            </div>

        </div>

    )
}

export default Home;