// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Speciality from './pages/Speciality';
import Service  from './pages/Service';
import Footer from './components/footer';  // Correct path for Footer component
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Account from './pages/Account';

function App() {
  return (
    <AuthProvider>
    <Router> {/* This should only wrap the app once */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path="/speciality" element={<Speciality />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer /> {/* Footer will appear on all pages */}
    </Router>
    </AuthProvider>
  );
}

export default App;
