import React from "react";
import "./Education.css";
function Education() {
  return (
    <section className="resumen-section">
      <div className="resumen-section-content">
        <h2 className="mb-5">Education</h2>

        <div className="d-flex flex-column flex-md-column justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Henry Bootcamp</h3>
            <div className="subheading mb-3">Fullstack development</div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">April 2023 - October 2023</span>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-column justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">General San Martín National University</h3>
            <div className="subheading mb-3">
              Telecommunications Engineering
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">February 2020 - March 2021</span>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-column justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">General San Martín National University</h3>
            <div className="subheading mb-3">Business Management</div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">March 2021 - May 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
