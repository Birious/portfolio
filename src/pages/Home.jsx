import React from 'react';
import PP from '../assets/pp.png';

function Home() {
  return (
    <div id="homepage">
      <img id="pp" src={PP} alt="Valentin" />
      <div id="baseinfo">
        <h1 id="name">Valentin Morette</h1>
        <p>Développeur Web Junior</p>
        <div id="icons">
          <a
            href="https://www.linkedin.com/in/valentinmorette/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://github.com/Valentin-Morette"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://twitter.com/VM__Dev"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
