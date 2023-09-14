import React from 'react';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Base() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Base;
