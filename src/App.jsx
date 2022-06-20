import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Cv from './components/Cv';
import Projet from './components/Projects';
import CodewarsStats from './components/CodewarsStats';
import trombi from './assets/trombi.png';
import coockie from './assets/coockie_cliker.png';
import wcw from './assets/wcw.png';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cv" element={<Cv />} />
          <Route
            path="projets"
            element={
              <>
                <div className="allProjetCard">
                  <Projet
                    title="Trombinoscope"
                    illus={trombi}
                    lien="https://Valentin-Morette.github.io/trombinoscope/"
                    description="Premier projet de groupe à la Wild Code School avec Alexandra De Brito, Louis Dufourmantelle et Jeffrey Rigaux."
                  />
                  <Projet
                    title="Coockie-Cliker"
                    illus={coockie}
                    lien="https://Valentin-Morette.github.io/coockie_cliker/"
                    description="Jeu qui reprend le principe du jeu Cookie-Clicker, c'est un terrain de jeu pour m'exercer à React en dehors des exercices des cours."
                  />
                  <Projet
                    title="Wild Code Wars"
                    illus={wcw}
                    lien="https://Valentin-Morette.github.io/wild-code-wars/"
                    description="Page utilisant l'API du jeu d'algorithme Code Wars, regroupe les statistiques de toute la promotion de la Wild Code School sur le jeu."
                  />
                </div>
                <CodewarsStats />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
