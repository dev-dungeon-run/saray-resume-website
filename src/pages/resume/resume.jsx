import { Link } from "react-router-dom";
import "./div1.css"
import "./div2.css"
import "./div3.css"
import "./resume.css"
import "./shared.css"


import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../../shared/navbar/navbar.jsx";
import meImg from "../../assets/resume_page_images/drawingOfMe.png"


import { useState } from "react"; // to expand card


function Resume() {
  return (
    <div className="resume_page">
      <Navbar />
      <div className="resume_container">
        <div class="container">
          <div class="main_div main_div1">
            <div className="div1_1 div1 clickable">

              <img src={meImg} alt="" className="resume_image" />

              <div className="myName_Student">
                <h1 className="sarayMartinez">Saray Alexandra <br /> Martinez</h1>

                <div className="line"></div>

                <h2>Software Engineering Student</h2>
              </div>

            </div>

            <div className="div1_2 div1">
              <div className="div1_2_1">
                <p> this is me ladi da</p>
                <button className="location">
                  Location
                </button>
              </div>






              <div className="div1_2_2">
                <div className="git_linkedin_download_butttons_container">
                  <div className="div1_2_2_1">
                    <button> git</button>
                    <button>linkedin </button>
                  </div>

                  <div className="div1_2_2_2">
                    <button>Download</button>
                  </div>
                </div>

                <button> email</button>

              </div>
            </div>
          </div>





          {/* ++++++++++++ */}
          {/* main div 2 */}
          {/* ****************** */}
          <div class="main_div main_div2">
            <div className="divs2 divs2_1">
              <div className="education_container">
                <h1>Education</h1>
                <div className="highSchool_container">
                  <h3>Collins Hill High School</h3>
                  <h5>High School Diploma</h5>
                  <p>Lawrenceville, GA</p>
                </div>
                <div className="line"></div>
                <div className="university_container">
                  <h3>Universidad La Salle Bajio</h3>
                  <h5>Software and Computer Science</h5>
                  <p>León GTO <br />2022 - Dec 2026</p>

                </div>
              </div>

              <div className="abtMe_conatiner">
                <h2>About Me</h2>
                <p className="aboutMe_paragraph">I’m a Software Engineering student at La Salle Bajío, born to immigrant parents, originally from Georgia and raised in the United States. Living between cultures has shaped my perspective on communication and language, and I enjoy hearing and experiencing new ones. I’m also interested in personal growth and inner peace, which influence how I approach both life and my work. I enjoy building interactive and thoughtful projects that combine creativity and technology.</p>

              </div>

              <div className="jobs_projects_container">
                <h1>Work Experience</h1>

                <div className="job_card">
                  <h2>Retail Associate</h2>
                  <p>
                    Developed customer service skills, handled fast-paced environments,
                    and learned how to communicate effectively with different types of people.
                  </p>
                </div>

                <div className="job_card">
                  <h2>Fast Food Worker</h2>
                  <p>
                    Worked efficiently under pressure, collaborated with team members,
                    and adapted quickly in high-demand situations.
                  </p>
                </div>

                <div className="job_card">
                  <h2>House Cleaning</h2>
                  <p>
                    Built discipline, attention to detail, and strong time management
                    through independent work.
                  </p>
                </div>
              </div>


            </div>







            {/* second div */}
            <div className="divs2 divs2_2">

              <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_1">

                  <div className="skills skills_1_1">
                    <div className="programingLanguage">
                      <h2>Programming Languages</h2>
                      <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Swift</li>
                      </ul>
                    </div>

                    <div className="frameworksTecnology">
                      <h2>Frameworks & Technologies</h2>
                      <ul>
                        <li>React</li>
                        <li>Angular</li>
                        <li>.NET MAUI</li>
                      </ul>
                    </div>
                  </div>

                  <div className="skills skills_1_2">
                    <div className="developmentTools">
                      <h2>Development Tools</h2>
                      <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Android Studio</li>
                        <li>Linux</li>
                      </ul>
                    </div>

                    <div className="databases">
                      <h2>Databases</h2>
                      <ul>
                        <li>MySQL / MariaDB</li>
                        <li>MongoDB Atlas</li>
                        <li>Azure DB</li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="skills_2">
                  <div className="DesignTools">
                    <h2>Design Tools</h2>
                    <ul>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe Animate</li>
                      <li>Autodesk Maya</li>
                    </ul>
                  </div>

                  <div className="GameDevelopment">
                    <h2>Game Development</h2>
                    <ul>
                      <li>Unity</li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="funFactsAbtMe_container">
                <h1>Fun Facts</h1>

                <ul>
                  <li>I collect old Disney VHS tapes like a tiny nostalgic archivist 📼</li>
                  <li>I love hearing music in different languages</li>
                  <li>I’m weirdly afraid of doppelgängers and I blame horror movies</li>
                  <li>I enjoy silence more than most people do</li>
                  <li>Rain instantly improves my mood</li>
                  <li>I like learning about tea and random health benefits 🍵</li>
                  <li>I’m slightly allergic to cats—which feels unfair honestly</li>
                </ul>
              </div>


            </div>
          </div>






          <div class="main_div main_div3">
            <div className="divs_3 interestStrengths_container">
              <h1>Interests And Strengths</h1>

              <div className="strengths_section">
                <h2>Strengths</h2>
                <ul>
                  <li>Strong work ethic and resilience</li>
                  <li>Adaptable in new environments</li>
                  <li>Creative problem solving</li>
                  <li>Independent learner</li>
                  <li>Attention to detail</li>
                </ul>
              </div>

              <div className="interests_section">
                <h2>Interests</h2>
                <ul>
                  <li>Game development</li>
                  <li>Web development</li>
                  <li>Language learning</li>
                  <li>Creative design</li>
                  <li>Health and wellness</li>
                  <li>Exploring different cultures through music</li>
                </ul>
              </div>
            </div>

            <div className="divs_3 languages_container">
              <h1>Languages</h1>

              <div className="language">
                <h2>English</h2>
                <div className="bar">
                  <div className="fill english"></div>
                </div>
                <p>Native</p>
              </div>

              <div className="language">
                <h2>Spanish</h2>
                <div className="bar">
                  <div className="fill spanish"></div>
                </div>
                <p>Advanced / Near Native</p>
              </div>

              <div className="language">
                <h2>French</h2>
                <div className="bar">
                  <div className="fill french"></div>
                </div>
                <p>Beginner - Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default Resume;