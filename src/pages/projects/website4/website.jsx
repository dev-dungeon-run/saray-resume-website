import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "./website.css";

export default function Website4({ onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      
      <div 
        className="expanded-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Website4</h1>

        <p>
          Adaptable and fast-learning student experienced in bilingual environments,
          with a passion for language learning, art, and psychological thrillers.
        </p>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>

    </div>
  );
}