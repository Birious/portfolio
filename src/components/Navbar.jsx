import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <ul id="menu">
          <li>
            <Link to="/" className="navbarLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="navbarLink">
              A propos
            </Link>
          </li>
          <li>
            <Link to="cv" className="navbarLink">
              CV
            </Link>
          </li>
          <li>
            <Link to="projets" className="navbarLink">
              Projets
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
