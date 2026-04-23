import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './shared/navbar/navbar.jsx';
import Projects from "./pages/projects/projects.jsx";

function App() {
  return (
    <div className="app">

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/resume" element={<h1>Resume Page</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;