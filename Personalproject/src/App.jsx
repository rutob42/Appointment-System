// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Speciality from './pages/Speciality';
import Service  from './pages/Service';
import Footer from './components/footer';  // Correct path for Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router> {/* This should only wrap the app once */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path="/speciality" element={<Speciality />} />
      </Routes>
      <Footer /> {/* Footer will appear on all pages */}
    </Router>
  );
}

export default App;
