import React from 'react'
import rural from '../../dist/ruraloutfitters.jpg'
import cloudBNB  from '../../dist/Nginxcode.png'
// Consider making this into a carousel that shows user-side pics and/or back-end code 
const MyProjects = () => {
  return (
    <div>
      <div className="title">
        <h2>
        My Software Engineering Apps
        </h2>
        </div>
      <div className="subtitle">Rural Outfitter</div>
      <div className="body-text">Online clothing store with image carousel and product information module</div>
      <div className="container">
        <img className="image" src={rural}/>
      </div>
      <div className="subtitle">Cloud B&B</div>
      <div className="body-text">Scaled-up legacy codebase to handle 500 requests per second and 10 million primary records in the database</div>
      <div className="container">
        <img className="image" src={cloudBNB}/>
      </div>
        <h3>Under Construction</h3>
      <div className="body-text">Steilacoom Project</div>
      <div className="body-text">Local American Indian Sites Application</div>
    </div>
  )
}

export default MyProjects