import React from 'react'

const ResumeText = (props) => {
  return (
    <div>
     {props.text.splice('\n')}
    </div>
  )
}

export default ResumeText