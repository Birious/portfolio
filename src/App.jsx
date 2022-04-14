import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cv from './components/Cv';
import Projet from './components/Projects';
import trombi from "./assets/trombi.png";
import coockie from "./assets/coockie.png";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="cv" element={<Cv />}></Route>
          <Route path="projets" element={
            <div class="allProjetCard">
              <Projet 
                title="Trombinoscope" 
                illus={trombi}
                lien="https://birious.github.io/trombinoscope/" 
                description="Premier projet de groupe à la Wild Code School avec Alexandra De Brito, Louis Dufourmantelle et Jeffrey Rigaux." />
              <Projet 
                title="Coockie-Cliker" 
                illus={coockie}
                lien="https://birious.github.io/coockie_cliker/" 
                description="Jeu qui reprend le principe du jeu Cookie-Clicker, c'est un terrain de jeu pour m'exercer à React en dehors des exercices des cours." />
            </div>
          }>           
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
