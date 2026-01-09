import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Hotels from './pages/Hotels';
import Dining from './pages/Dining';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
