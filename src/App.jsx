import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Views/Navigation/Navigation";
import About from "./Views/About/About";
import Experience from "./Views/Experience/Experience";
import Skills from "./Views/Skills/Skills";
import Certifications from "./Views/Certifications/Certifications";
import Education from "./Views/Education/Education";
import Interests from "./Views/Interests/Interests";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa los scripts de Bootstrap
import Portfolio from "./Views/Porfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Portfolio />
        <Navigation />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/Certifications" element={<Certifications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
