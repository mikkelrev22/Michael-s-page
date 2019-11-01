import React from 'react'
import hikingPhoto from '../../dist/hiking.jpg'
import spiderMeadow from '../../dist/spidermeadow.jpg'
import worldCup from '../../dist/worldcup.jpg'

const AboutMe = () => {
  return (
    <div>
      <div className="title">
        <h2>A Little About Me:</h2>
      </div>
      <div className="body-text">
        I was born and raised in Seattle, Washington. I love learning about new things and coding has become one of my passions. In addition, I love learning about the world, playing sports, and enjoying the outdoors.
      </div>
      <div className="image-container">
        <img className="image" src={hikingPhoto}/>
        <img className="image" src={spiderMeadow}/>
        <img className="image" src={worldCup}/>
      </div>
    </div>
  )
}

export default AboutMe