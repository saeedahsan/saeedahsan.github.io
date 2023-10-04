import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
