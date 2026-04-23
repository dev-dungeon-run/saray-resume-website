import "./projects.css";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../../shared/navbar/navbar.jsx";

function Projects() {
  return (
    <div className="projects-page">
      <Navbar />
      
      <h1 className="projects_header">Projects</h1>
      <div className="projects-container">
        <div className="contactInfo-allProjects-container">
          <div className="div div-1">
            <button className="all-project-div all-projects-button">
              <p>
                All Projects
              </p>
            </button>
            <button className="contact-info-button">
              <div className="contact-overlay">
                <h1>Saray Alexandra Martinez</h1>

                <p className="contact-desc">
                  Adaptable and fast-learning student experienced in bilingual environments,
                  with a passion for language learning, art, and psychological thrillers.
                </p>

                <div className="contact-links">
                  <a href="mailto:sarayalexandra.martinez@gmail.com">
                    <FaEnvelope /> sarayalexandra.martinez@gmail.com
                  </a>

                  <a href="tel:4432135785">
                    <FaPhone /> 443 213 5785
                  </a>

                  <a href="https://github.com/Saristeidyn" target="_blank" rel="noreferrer">
                    <FaGithub /> Saristeidyn
                  </a>

                  <a href="https://www.linkedin.com/in/saray-martinez-sam" target="_blank" rel="noreferrer">
                    <FaLinkedin /> saray-martinez-sam
                  </a>
                </div>


              </div>
            </button>
          </div>







          <div className="div div-2">
            <div className="divs-2 div2-1">
              <button className="website-1-button-div2 button_div2">Website 1</button>

            </div>
            <div className="divs-2 div2-2">
              <button className="button_div2 website-2-button-div2">
                website 2
              </button>
              <button className="button_div2 website-3-button-div2">
                website 3
              </button>
            </div>
          </div>







          <div className="div div-3">
            <button className="div_3_buttons website-4-button">
              Website 4
            </button>
            <button className="div_3_buttons website-5-button">
              Website 5
            </button>
            <button className="div_3_buttons website-6-button">
              Website 6

            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;