import React from 'react'

const Resume = () => {
  return (
    <div>
      <div className="title">
        <h2>Résumé</h2>
      </div>
      <div className="resume-buttons-container">
        <button className="resume-buttons" id="technical-skill-button"> Technical Skills</button>
        <button className="resume-buttons" id="software-engineering-application-button"> Software Engineering Applications</button>
        <button className="resume-buttons" id="professional-experience-button"> Professional Experience</button>
        <button className="resume-buttons" id="education-button"> Education</button>
      </div>
    </div>
  )
}

export default Resume