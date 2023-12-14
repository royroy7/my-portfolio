import React, { Component, useState } from "react";
import './Projects.css'
import ProjIMG1 from '../../assets/gwa.png';
import ProjIMG2 from '../../assets/registration.png';
import ProjIMG3 from '../../assets/vaccination.png';

function Project() {
  const [sections, setSections] = useState({
    proj1: false,
    proj2: false,
    proj3: false,
  });

  const toggleSection = (sectionName) => {
    setSections((prevSections) => ({
      ...prevSections,
      [sectionName]: !prevSections[sectionName],
    }));
  };


  return (
    <section id='projects'>
      <span className="projectTitle">MY PROJECTS</span>
      <div className="projects-content">

        <div className="projects-section">
          <button className="btn" onClick={() => toggleSection('proj1')}>
            {sections.proj1 ? 'Hide' : 'Show GWA Calculator'}
          </button>
          {sections.proj1 && (
            <span>
              <Proj1
                src={ProjIMG1}
              />
            </span>
          )}
        </div>

        <div className="projects-section">
          <button className="btn" onClick={() => toggleSection('proj2')}>
            {sections.proj2 ? 'Hide' : 'Show Registration System'}
          </button>
          {sections.proj2 && (
            <span>
              <Proj2
                src={ProjIMG2}
              />
            </span>
          )}
        </div>

        <div className="projects-section">
          <button className="btn" onClick={() => toggleSection('proj3')}>
            {sections.proj3 ? 'Hide' : 'Show Vaccination Management System'}
          </button>
          {sections.proj3 && (
            <span>
              <Proj3
                src={ProjIMG3}
              />
            </span>
          )}
        </div>

      </div>
    </section>
  );
}

const Proj1 = () => {
  return (
    <div className="img">
      <span>GWA CALCULATOR</span>
      <img className="show-img" src={ProjIMG1} />
    </div>
  )
}

const Proj2 = () => {
  return (
    <div className="img">
      <span>REGISTRATION SYSTEM</span>
      <img className="show-img" src={ProjIMG2} />
    </div>
  )
}

const Proj3 = () => {
  return (
    <div className="img">
      <span>VACCINATION MANAGEMENT SYSTEM</span>
      <img className="show-img" src={ProjIMG3} />
    </div>
  )
}

export default Project;