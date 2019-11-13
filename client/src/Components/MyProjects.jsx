import React from 'react'
import worldCup from '../../dist/worldcup.jpg'
// Consider making this into a carousel that shows user-side pics and/or back-end code 
const MyProjects = () => {
  return (
    <div>
      <div className="title">
        <h2>
        My Software Engineering Apps
        </h2>
        </div>
        <div>
          <h3>Completed</h3>
        </div>
      <div className="body-text">Rural Outfitter</div>
      <div>
        <img className="image" src={worldCup}/>
      </div>
      <div className="body-text">Cloud B&B</div>
        <h3>Under Construction</h3>
      <div className="body-text">Steilacoom Project</div>
      <div className="body-text">Local American Indian Sites Application</div>
    </div>
  )
}

export default MyProjects