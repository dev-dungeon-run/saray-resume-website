import "./projects.css";

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="projects_header">Projects</h1>
      <div className="projects-container">
        <div className="contactInfo-allProjects-container">
          <div className="div div-1">
            <button className="all-project-div all-projects-button">
              All Projects
            </button>
            <button className="all-project-div contact-info-button">
              Contact Info
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