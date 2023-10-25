import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";
function Experience() {
  return (
    <section className="resumenes-section">
      <div className="resumenes-section-content">
        <h2 className="mb-5">Projects</h2>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">House Rental App</h3>
            <Link
              to="https://pf-2-lavenganza-front-6doztsbfp-migorriti.vercel.app/home"
              target="_blank"
            >
              Click here to Visit. (be patient, backend may take a few seconds
              to load)
            </Link>
            <p>
              Led a team of 6 developers in the development of a short-term
              property rental application. During this project, we applied the
              knowledge acquired from a bootcamp and explored the use of
              Tailwind technology. My primary responsibilities included managing
              styles, enhancing the user experience, team coordination, task
              assignment, and conducting testing on the application at each
              sprint. Our collaboration resulted in a successful project
              delivery, meeting the established timelines, and exceeding our
              initial expectations.
            </p>
          </div>

          <div className="flex-shrink-0"></div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Cars Selling App</h3>
            <Link to="https://rumrum-nyd5.vercel.app/home" target="_blank">
              Click here to Visit. (be patient, backend may take a few seconds
              to load)
            </Link>
            <p>
              In collaboration with fellow bootcamp peers, we set out to apply
              our knowledge by developing a test vehicle sales app. Our
              objective was to put our learning into practice and experiment
              with various team roles to identify our strengths. Although the
              project was not fully completed, we managed to create a functional
              version and define team roles, with me taking on the role of
              leader. Despite not reaching completion, this experience laid the
              groundwork for our subsequent project, which turned out polished
              and fully functional, in addition to helping us clarify the
              responsibilities of each team member.
            </p>
          </div>

          <div className="flex-shrink-0"></div>
        </div>
        <h3 className="mb-0">Recipe App</h3>
        <p>
          In this project, I developed a recipe website, actively participating
          in both the frontend and backend development. My primary goal was to
          gain experience in the end-to-end development of a web application. I
          worked with SQL to manage a database where related information is
          stored. I used a server-side programming language, such as Node.js, to
          create endpoints that respond to frontend requests and manipulate data
          in the database. To facilitate communication between the frontend and
          backend, I implemented HTTP requests, including GET and POST requests,
          using protocols such as AJAX or the Fetch API. Working on this project
          allowed me to become familiar with client-server architecture,
          database management, server-side programming, and communication
          between the frontend and backend.
        </p>
      </div>
    </section>
  );
}

export default Experience;
