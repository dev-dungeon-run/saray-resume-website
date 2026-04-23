import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className = "links">
                <li className="projects_link link"><Link to="/">Projectsddsds</Link></li>
                <li className="resume_link link"><Link to="/resume">Resume</Link></li>
            </ul>

            <input 
                className="searchbar"
                type="text"
                placeholder="Search..."
            />

        </nav>

    );
}

export default Navbar;