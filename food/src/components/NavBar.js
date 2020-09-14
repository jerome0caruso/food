import React from 'react';
import './css/NavBar.css';


function NavBar() {
    return (
        <div className="header">
            <h1 className="logo">Pantry!</h1>
            <nav>
                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Search</a></li>
                    <li><input type="text"></input></li>
                </ul>
            </nav>
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </div>
    )
}

export default NavBar;