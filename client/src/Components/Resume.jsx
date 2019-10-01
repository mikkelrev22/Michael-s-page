import React from 'react'
import ResumeText from './ResumeText.jsx'

class Resume extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      text: ''
    }
    this.state.handleClickz= this.state.bind(handleClickz)
  }

  handleClickz(e) {
    const id = e.target.value
    const storage = {
      skills: "hi",
      apps: "how",
      experience: "are",
      education: "you"
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
          <button className="resume-buttons" value="skills" id="technical-skill-button" onClick={this.handleClickz}> Technical Skills</button>
          <button className="resume-buttons" value="apps" id="software-engineering-application-button" onClick={this.handleClickz}> Software Engineering Applications</button>
          <button className="resume-buttons" value="experience" id="professional-experience-button" onClick={this.handleClickz}> Professional Experience</button>
          <button className="resume-buttons" value="education" id="education-button" onClick={this.handleClickz}> Education</button>
        </div>
        <div className="body-text">
        {this.state.text.length &&
          <ResumeText text={this.state.text}/>
        }
        </div>
      </div>
    )
  }
}

export default Resume