import React from 'react'
import AboutMe from './AboutMe.jsx'
import ContactMe from './ContactMe.jsx'
import MyProjects from './MyProjects.jsx'
import Resume from './Resume.jsx'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      view: null
    }
    this.changeView = this.changeView.bind(this)
    this.renderView = this.renderView.bind(this)
  }

  changeView(option) {
    console.log(this.state)
    this.setState({
      view: option
    })
  }

  renderView() {
    const {view} = this.state

    if(view === 'home') {
      return <App/>
    }
    if (view === 'aboutMe') {
      return <AboutMe/>
    }
    if (view === 'resume') {
      return <Resume/>
    }
    if (view === 'myProjects') {
      return <MyProjects/>
    }
    if (view === 'contactMe') {
      return <ContactMe/>
    }
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <span onClick= {()=>this.changeView('home')}>Home</span>
          <span onClick= {()=>this.changeView('aboutMe')}>About Me</span>
          <span onClick= {()=>this.changeView('resume')}>Résumé</span>
          <span onClick= {()=>this.changeView('myProjects')}>My Projects</span>
          <span onClick= {()=>this.changeView('contactMe')}>Contact Me</span>
        </div>
        <div className="container">
          <div className="welcome">Welcome!</div>
          <div className="home-text">Lorem Ipsum blah blah blah lbahl;aksdf;alsidjf;alksdjf;alsk</div>
        </div>
      </div>
    )
  }
}

export default App