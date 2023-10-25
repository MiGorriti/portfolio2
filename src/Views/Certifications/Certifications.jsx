import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesome
import { faTrophy } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de trofeo
import "./Certifications.css";
function Certifications() {
  return (
    <section id="certifications" className="epsilon">
      <div className="epsilon-content">
        <h2 className="mb-5">Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faTrophy} className="text-warning" />{" "}
              {/* Usa FontAwesomeIcon para el ícono */}
            </span>
            Google Digital Marketing Certification
          </li>
          <li>
            <span className="fa-li">
              <FontAwesomeIcon icon={faTrophy} className="text-warning" />
            </span>
            Web development - Henry Certification
          </li>
          {/* Agrega más certificaciones según sea necesario */}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
