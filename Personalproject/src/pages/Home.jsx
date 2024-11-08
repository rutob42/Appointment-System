import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const specialties = [
        { id: 1, name: "Cardiology" },
        { id: 2, name: "Neurology" },
        { id: 3, name: "Orthopedics" },
        // Add more specialties as needed
    ];

    return (
        <div>
            <div className='home-container'>
                <div className='img'>
                    <header className='home-header'>
                        <h2>Karibu!</h2>
                        <p>
                            Your health is our priority. <br />
                            Book an Appointment, consult specialists <br />
                            Best care like home
                        </p>
                    </header>
                </div>
            </div>

            {/* Speciality Section */}
            <div className="below-image">
                <h3 className="speciality">
                    Find your specialty
                    <p className="speciality-description">
                        Simply by a click of a button, you get to view your desired specialist
                    </p>
                </h3>
            </div>

            {/* List of Specialties */}
            <div className="specialty-list">
                <ul>
                    {specialties.map((specialty) => (
                        <li key={specialty.id} className="specialty-item">
                            <Link to={`/specialty/${specialty.id}`} className="specialty-link">
    {specialty.name}
</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
