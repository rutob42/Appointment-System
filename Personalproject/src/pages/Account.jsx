import React from 'react';
import { useAuth } from '../context/AuthContext';

function Account() {
    const { currentUser } = useAuth();

    return (
        <div>
            <h2>Account Information</h2>
            {currentUser ? (
                <>
                    <p>Email: {currentUser.email}</p>
                    {/* Additional account info can go here */}
                </>
            ) : (
                <p>No user logged in.</p>
            )}
        </div>
    );
}

export default Account;
