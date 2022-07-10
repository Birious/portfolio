import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Cv from './pages/Cv';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cv" element={<Cv />} />
          <Route path="projets" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
