import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './shared/navbar/navbar.jsx';
import Projects from "./pages/projects/projects.jsx";
// npm run dev
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/resume" element={<h1>Resume Page</h1>} />
      </Routes>
    </>
  );
}

export default App;