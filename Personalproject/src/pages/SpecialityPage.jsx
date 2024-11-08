import React from 'react';
import { useParams } from 'react-router-dom'; // To access URL parameters
import '../styles/SpecialityPage.css'

function SpecialtyPage() {
    const { specialtyId } = useParams(); // Get the selected specialty ID from the URL
    const doctors = [
        { id: 1, name: "Dr. John Wajula", specialty: "Cardiology" },
        { id: 2, name: "Dr. Jane Njoroge", specialty: "Neurology" },
        { id: 3, name: "Dr. Alice Koech", specialty: "Orthopedics" },
        { id: 4, name: "Dr. Mark Kamau", specialty: "Cardiology" },
        { id: 5, name: "Dr. Ruth Njiru", specialty: "Cardiology" },
        { id: 6, name: "Dr. Brian Kimani", specialty: "Orthopedics" },
    ];

    // Filter doctors based on the selected specialty
    const filteredDoctors = doctors.filter(doctor => doctor.specialty === specialtyId);

    return (
        <div className="specialty-page">
            <h2>Doctors in {specialtyId}</h2>
            <div className="doctor-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => (
                        <div key={doctor.id} className="doctor-card">
                            <h3>{doctor.name}</h3>
                            <p>Specialty: {doctor.specialty}</p>
                        </div>
                    ))
                ) : (
                    <p>No doctors available in this specialty.</p>
                )}
            </div>
        </div>
    );
}

export default SpecialtyPage;
