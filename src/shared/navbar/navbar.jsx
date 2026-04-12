import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="projects_link link"><Link to="/">Projects</Link></li>
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