import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './shared/navbar/navbar.jsx';
import Projects from "./pages/projects/projects.jsx";
import Resume from "./pages/resume/resume.jsx"

function App() {
  return (
    <div className="app">

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;