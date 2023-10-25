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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Portfolio from "./Views/Porfolio/Portfolio";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navigation scrollToSection={scrollToSection} />
        <Portfolio />
        <Routes>
          <Route path="/#about" element={<About />} />
          <Route path="/#experience" element={<Experience />} />
          <Route path="/#skills" element={<Skills />} />
          <Route path="/#education" element={<Education />} />
          <Route path="/#interests" element={<Interests />} />
          <Route path="/#certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
