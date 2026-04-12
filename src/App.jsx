import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './shared/navbar/navbar.jsx';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Projects Page</h1>} />
        <Route path="/resume" element={<h1>Resume Page</h1>} />
      </Routes>
    </>
  );
}

export default App
