import React from 'react';
import './css/NavBar.css';


function NavBar() {
    return (
        <div className="header">
            <nav className="nav">
                <h1 className="logo">-The Pantry-</h1>
                <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Random</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
                <ul className="nav-list-search">
                    <li>Search</li>
                    <li><input type="text"></input></li>
                    <li><button>enter</button></li>
                </ul>
            </nav>
            <label for="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </div>
    )
}

export default NavBar;