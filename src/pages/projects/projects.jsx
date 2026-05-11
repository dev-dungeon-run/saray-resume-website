import "./projects.css";
import "./shared.css"
import "./div-1.css"
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../../shared/navbar/navbar.jsx";

import { useState } from "react"; // to expand card

import ContactCardExpanded from "./contactInfo/ContactCardExpanded.jsx";
import Website1 from "./website1/website.jsx";
import Website2 from "./website2/website.jsx";
import Website3 from "./website3/website.jsx";

import Website4 from "./website4/website.jsx";
import Website5 from "./website5/website.jsx";
import Website6 from "./website6/website.jsx";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);




  return (
    <div className="projects-page">
      <Navbar />

      <div className="projects-container">
        <div className="contactInfo-allProjects-container">
          <div className="div div-1">
            <button className="all-project-div all-projects-button">
              <p>
                All Projects
              </p>
            </button>
            <button className="contact-info-button"
              onClick={() => setSelectedProject("contact")}
            >
              <div className="website_dives">
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
              <div
                className="website-1-button-div2 button_div2"
                onClick={() => setSelectedProject("website1")}
              >
                <div className="website1-div website_dives">
                  <h1>Html. CSS</h1>

                  <h2>Toon Cafe
                    
                  </h2>

                  <a
                    href="https://dev-dungeon-run.github.io/cartoonCafe/"
                    target="_blank"
                    rel="noreferrer"
                    className="view-project-button website1-view-project-button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
              </div>

            </div>
            <div className="divs-2 div2-2">
              <div
                className="button_div2 website-2-button-div2"
                onClick={() => setSelectedProject("website2")}
              >
                <div className="website2-div website_dives">
                  <h1>
                    Unity
                  </h1>

                  <h2>
                    Flappy Bird knock Off
                  </h2>
                  <a
                    href="https://dev-dungeon-run.github.io/flappyBird_web/"
                    target="_blank"
                    rel="noreferrer"
                    className="view-project-button website2-view-project-button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>

                </div>
              </div>
              <div
                className="button_div2 website-3-button-div2"
                onClick={() => setSelectedProject("website3")}
              >
                <div className="website3-div website_dives">
                  <h1>Website3</h1>

                  <h2>name of the project</h2>

                  <a
                    href="https://your-project-link.com"
                    target="_blank"
                    rel="noreferrer"
                    className="view-project-button website3-view-project-button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>







          <div className="div div-3">
            <div
              className="div_3_buttons website-4-button"
              onClick={() => {
                console.log("clicked 4");
                setSelectedProject("website4");
              }}
            >
              <div className="website2-div website_dives">
                <h1>Website2</h1>

                <h2>name of the project</h2>

                <a
                  href="https://your-project-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="view-project-button website4-view-project-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
              </div>
            </div>

            <div
              className="div_3_buttons website-5-button"
              onClick={() => setSelectedProject("website5")}
            >
              <div className="website2-div website_dives">
                <h1>Website2</h1>

                <h2>name of the project</h2>

                <a
                  href="https://your-project-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="view-project-button website5-view-project-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
              </div>
            </div>

            <div
              className="div_3_buttons website-6-button"
              onClick={() => setSelectedProject("website6")}
            >
              <div className="website2-div website_dives">
                <h1>Website2</h1>

                <h2>name of the project</h2>

                <a
                  href="https://your-project-link.com"
                  target="_blank"
                  rel="noreferrer"
                  className="view-project-button website6-view-project-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      {selectedProject === "website1" && (
        <Website1 onClose={() => setSelectedProject(null)} />
      )}

      {selectedProject === "website2" && (
        <Website2 onClose={() => setSelectedProject(null)} />
      )}

      {selectedProject === "website3" && (
        <Website3 onClose={() => setSelectedProject(null)} />
      )}

      {selectedProject === "website4" && (
        <Website4 onClose={() => setSelectedProject(null)} />
      )}

      {selectedProject === "website5" && (
        <Website5 onClose={() => setSelectedProject(null)} />
      )}

      {selectedProject === "website6" && (
        <Website6 onClose={() => setSelectedProject(null)} />
      )}

      {selectedProject === "contact" && (
        <ContactCardExpanded onClose={() => setSelectedProject(null)} />
      )}

    </div>


  );
}

export default Projects;