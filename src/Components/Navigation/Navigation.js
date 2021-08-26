import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation-main">
            <div className="logo">
                <img src="./img/logo-w.png" alt="Logo" className="logo-img" />
            </div>
            <div className="navigation-list">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Apartment</a></li>
                    <li><a href="/">Others</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
