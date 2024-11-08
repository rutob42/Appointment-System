import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                {/* You can add a logo here if you want */}
            </div>
            <ul className='navbar-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Services">Services</Link></li>


            </ul>
        </nav>
    );
}

export default Navbar;
