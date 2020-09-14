import React from 'react';
import NavBar from './components/NavBar';


function Home() {
    return(
        <div className="main-container">
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="main-photo">
                <photo />
            </div>
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="nav-bar">
                <NavBar />
            </div>
        </div>

    )
}

export default Home;