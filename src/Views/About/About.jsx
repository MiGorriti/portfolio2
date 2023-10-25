import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesome
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"; // Importa los íconos de LinkedIn y GitHub
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <section id="about" className="resume-section">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Miguel <span className="text-primary">Gorriti</span>
        </h1>
        <div className="subheading mb-5">
          Buenos Aires · Argentina, GMT-3 · +54 9 (3445) 43-3378 ·{" "}
          <Link to="mailto:miguegorriti@gmail.com">miguegorriti@gmail.com</Link>{" "}
          {/* Cambia "Link" a "a" para el correo */}
        </div>
        <p className="lead mb-5">
          I am a passionate junior front-end developer with a focus on creating
          engaging and functional user experiences. My background includes
          leading teams and contributing to both front-end and back-end
          development. In these projects, I've worked with technologies such as
          HTML, CSS, JavaScript, and Node.js, implementing creative and
          efficient solutions. My love for coding is complemented by my language
          skills, as I am fluent in both English and German. This enables me to
          effectively collaborate in international teams and understand the
          needs of a global audience. I am committed to continuing my career
          growth as a front-end developer, constantly learning and staying
          up-to-date with the latest trends and technologies. I'm eager to
          contribute my expertise and skills to the development of innovative
          solutions that enhance the user experience and drive successful
          projects forward.
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
            to="/pdf/cv1.pdf"
            target="_blank"
            download="CV_Miguel_Gorriti.pdf"
            style={{ color: "white" }}
          >
            Download English Resume
          </Link>
          <Link
            className="btn btn-primary"
            to="/pdf/cv2.pdf"
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
