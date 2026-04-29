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
              </div>

              <div className="abtMe_conatiner">
                <h2>About Me</h2>

              </div>

              <div className="jobs_projects_container">
                <h1>Experience</h1>

              </div>


            </div>




            {/* second div */}
            <div className="divs2 divs2_2">

              <div className="skills_container">
                <h1>Skills</h1>

                <div className="skills_1">
                  <div className="skills skills_1_1">

                  </div>

                  <div className="skills skills_1_2">

                  </div>
                </div>

                <div className="skills_2">

                </div>

              </div>

              <div className="funFactsAbtMe_container">
                <h1>Fun Facts</h1>

              </div>


            </div>
          </div>



          <div class="main_div main_div3">
            <div className="divs_3 interestStrengths_container">
              <h1>Interest And Strengths</h1>
            </div>

            <div className="divs_3 languages_container">
              <h1>Languages</h1>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Resume;