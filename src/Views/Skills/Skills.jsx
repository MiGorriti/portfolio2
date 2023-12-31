import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="resumer-section">
      <div className="resumer-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faCss3Alt} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faJsSquare} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faNodeJs} />
          </li>
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faNpm} />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Cross Functional Teams
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faCheck} />
            </span>
            Agile Development & Scrum
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
