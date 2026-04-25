import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactCardExpanded.css";

export default function ContactCardExpanded({ onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      
      <div 
        className="expanded-card"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Saray Alexandra Martinez</h1>

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