import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div >
            <ul id="menu">
                <li>
                <Link to="/portfolio">Home</Link>
                </li>
                <li>
                    <Link to="about">A propos</Link>
                </li>
                <li>
                    <Link to="cv">CV</Link>
                </li>
                <li>
                    <Link to="projets">Projets</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
