import React from 'react';
import '../styles/Speciality.css';
function Speciality(){
    return(
        <div>
            <img className='image' />
        
        <div className='doctor-container' id='doctor-speciality'>
            
            <div>
                <ul className='speciality-list'>
                    <div className='first-line'>
                    <li>Neurosurgeon</li>
                    <li>Optician</li>
                    <li>Cardiologists</li>
                    </div>
                    <div className='second-line'>
                    <li>Dermatologists</li>
                    <li>Gastroenterologists</li>
                    </div>
                   
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Speciality;