import { Link } from "react-router-dom";
import "./div1.css"
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../../shared/navbar/navbar.jsx";

import "./resume.css"

import { useState } from "react"; // to expand card


function Resume() {
  return (
    <div className="resume_page">
      <Navbar />
      <div className="resume_container">
        <div class="container">
          <div class="main_div main_div1">
            <div className="div1_1 div1">

            </div>

            <div className="div1_2 div1">

            </div>
          </div>



          <div class="main_div main_div2">

          </div>
          <div class="main_div main_div3">

          </div>
        </div>
      </div>

    </div>
  );
}

export default Resume;