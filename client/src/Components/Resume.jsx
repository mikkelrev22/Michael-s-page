import React from 'react'
import ResumeText from './ResumeText.jsx'

class Resume extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      text: ''
    }
    this.handleClick= this.handleClick.bind(this)
  }
  //probably enough for now: consider adding button for apps that takes user to 'my projects' view

  handleClick(e) {
    const id = e.target.value
    const storage = {
      skills: `Languages: JavaScript, HTML, CSS\n Frameworks: React, Node.js, Express\n Databases: MongoDB, MySQL, PostgreSQL\n Testing: Jest, Enzyme, Mocha, Chai, Postman, HTTPie, Loader.io\n Deployment: Docker, Docker-compose, AWS EC2, Nginx, AWS S3\nTools: CSS modules, Ajax, jQuery, Axios, Webpack, Git, Trello, Vim`,
      apps: `Rural Outfitters: Online clothing store with image carousel and product information module\n Cloud B&B: inherited legacy codebase and rebuilt backend to handle 500 requests per second and include 10 million primary records in the database`,
      experience: `Attended NASA Space Apps Hackathon Challenge & contributed to DigitalOcean Hacktoberfest (October 2019)\n Lead Instructor - Creative Coding For Kids (February 2018 - August 2018)\n ESL Instructor - EPIK, Shoreline College, Private Tutoring (2010 - 2017)\n Research Intern - Research Institute for Climate Change Response (2016-2017)`,
      education: `Advanced Software Engineering Immersive, Hack Reactor@Galvanize (Aug. 2019)\n Masters in International Studies, Seoul National University (Aug. 2017)\n Test of Proficiency in Korean (TOPIK), Level 6 (June 2014)\n Bachelor of Arts in Asian Studies, Pomona College (May 2010)`
    }
    this.setState({
      text: storage[id]
    })
  }

  render() {
    return (
      <div>
        <div className="title">
          <h2>Résumé</h2>
        </div>
        <div className="resume-buttons-container">
          <button className="resume-buttons" value="skills" id="technical-skill-button" onClick={this.handleClick}> Technical Skills</button>
          <button className="resume-buttons" value="apps" id="software-engineering-application-button" onClick={this.handleClick}> Software Engineering Applications</button>
          <button className="resume-buttons" value="experience" id="professional-experience-button" onClick={this.handleClick}> Professional Experience</button>
          <button className="resume-buttons" value="education" id="education-button" onClick={this.handleClick}> Education</button>
        </div>
        <div className="body-text">
        {this.state.text.length>0 &&
          <ResumeText text={this.state.text}/>
        }
        </div>
      </div>
    )
  }
}

export default Resume