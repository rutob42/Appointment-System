import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useAuth } from '../context/AuthContext';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Navbar() {
    const [user, setUser] = useState(null);

    //listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser); //sets the user if logged in,or null if not
        });

        return () => unsubscribe // cleanup on unmount
    }, []);

    //logout function
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            setUser(null);

        })
        .catch((error) => {
            console.error("Logout error: ",error);
        });
    }
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                {/* You can add a logo here if you want */}
            </div>
            <ul className='navbar-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="/doctors">Doctors</Link></li>
                <li><Link to="/about">About</Link></li>
                {user ? (
                    <div className='user-info'>
                         <span>Welcome, {user.email}</span>
                         <button onClick={handleLogout}>Logout</button>
                    </div>
                   
                ): (
                    //display Signup/Login if not logged in
                    <>
                    <Link to="/signup">Sign Up</Link>  {/* Signup link */}
                    <Link to="/login">Log In</Link> 
                    </>
                )}
                


            </ul>
        </nav>
    );
}

export default Navbar;
