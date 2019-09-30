import React from 'react'
import AboutMe from './AboutMe.jsx'
import ContactMe from './ContactMe.jsx'
import MyProjects from './MyProjects.jsx'
import Resume from './Resume.jsx'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      view: 'home'
    }
    this.handleClick = this.handleClick.bind(this)
    this.renderView = this.renderView.bind(this)
  }

  handleClick(e) {
    const id = e.target.id
    this.setState({
      view: id
    })
  }

  renderView() {
    if (this.state.view === 'aboutMe') {
      return <AboutMe/>
    }
    if (this.state.view === 'resume') {
      return <Resume/>
    }
    if (this.state.view === 'myProjects') {
      return <MyProjects/>
    }
    if (this.state.view === 'contactMe') {
      return <ContactMe/>
    }
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <span id= "home" onClick= {this.handleClick}>Home</span>
          <span id= "aboutMe" onClick= {this.handleClick}>About Me</span>
          <span id= "resume" onClick= {this.handleClick}>Résumé</span>
          <span id= "myProjects" onClick= {this.handleClick}>My Projects</span>
          <span id= "contactMe" onClick= {this.handleClick}>Contact Me</span>
        </div>
        <div>
          {this.renderView()}
        </div>
        <div className="title">
          {this.state.view==='home' &&
          <h2>
          Welcome to my page!
          </h2>
        }
        </div>
      </div>
    )
  }
}

export default App