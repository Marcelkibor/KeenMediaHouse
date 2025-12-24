import React from 'react';
import './App.css';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LandingText from './components/LandingText';
import AdminLogin from './components/Admin/AdminLogin';
import { Navigation } from './components/Navigation';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {

return (
<div>
  <Router>
    <Routes>
      <Route path="/" 
       element={
            <>
              <Navigation />
              <LandingText />
              <Services />
              <Portfolio />
              <Team />
              <Testimonials />
              <Booking />
              <Footer />
            </>
          } 
      />
       <Route path="/admin-login" element={<AdminLogin/>} />
       <Route path="/admin-dashboard" element={<AdminDashboard/>} />
    </Routes>
  </Router>
</div>
  );
}
export default App;
