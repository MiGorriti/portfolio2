import React from "react";
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Certifications from "../Certifications/Certifications";
import Education from "../Education/Education";
import Interests from "../Interests/Interests";

function Portfolio() {
  return (
    <div>
      <Navigation />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Interests />
      <Certifications />
    </div>
  );
}

export default Portfolio;
