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

  handleClick(e) {
    const id = e.target.value
    const storage = {
      skills: `Languages: JavaScript, HTML, CSS\n Frameworks: React, Node.js, Express\n Databases: MongoDB, MySQL, PostgreSQL\n Testing: Jest, Enzyme, Mocha, Chai, Postman, HTTPie, Loader.io\n Deployment: Docker, AWS EC2, Nginx, AWS S3\nTools: CSS modules, Ajax, jQuery, Axios, Webpack, Git, Trello, Vim\n`,
      apps: ``,
      experience: ``,
      education: ``
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