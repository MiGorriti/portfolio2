import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesome
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Importa los íconos de LinkedIn y GitHub
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <section id="about" className="resume-section">
      <div className="resume-section-content">
        <img
          src="public\img\pruebita.png"
          alt="Profile"
          className="profile-image"
          style={{ width: "300px", height: "2%", marginBottom: "-200px" }}
        />{" "}
        <h1 className="mb-0">
          Miguel <span className="text-primary">Gorriti</span>
        </h1>
        <div className="subheading mb-5">
          Buenos Aires · Argentina, GMT-3 · +54 9 (3445) 43-3378 ·{" "}
          <FontAwesomeIcon icon={faWhatsapp} />
          <Link
            href="https://wa.me/+5493445433378"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          ></Link>
          <Link to="mailto:miguegorriti@gmail.com">miguegorriti@gmail.com</Link>{" "}
        </div>
        <Link
          className="btn btn-primary"
          to="mailto:miguegorriti@gmail.com"
          target="_blank"
          style={{ color: "white", marginTop: "-40px" }}
        >
          Email me!
        </Link>
        <p className="lead mb-5">
          I'm a junior Fullstack developer oriented to front end. Passionate
          about crafting engaging user experiences. My experience involves
          leading teams and contributing to both frontend and back-end
          development. I've utilized technologies like HTML, CSS, JavaScript,
          and Node.js to implement creative and efficient solutions. My
          proficiency in English and ongoing study of German enables effective
          collaboration in diverse teams and understanding of global audience
          needs. I'm dedicated to continual growth in my front-end development
          career, staying updated with the latest trends and technologies. I'm
          enthusiastic about contributing my skills to drive innovative
          solutions, enhance user experiences, and propel successful projects
          forward.
        </p>
        <div className="social-icons">
          <Link
            to="https://www.linkedin.com/in/miguel-gorriti/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />{" "}
            {/* Usa FontAwesomeIcon para el ícono */}
          </Link>
          <Link
            to="https://github.com/MiGorriti"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            className="btn btn-primary"
            to="/pdf/Miguel_Gorriti_En_Cv.pdf"
            target="_blank"
            download="CV_Miguel_Gorriti.pdf"
            style={{ color: "white" }}
          >
            Download English Resume
          </Link>
          <Link
            className="btn btn-primary"
            to="/pdf/Miguel_Gorriti_Es_Cv.pdf"
            target="_blank"
            download="CV_Miguel_Gorriti.pdf"
            style={{ color: "white" }}
          >
            Download Spanish Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
