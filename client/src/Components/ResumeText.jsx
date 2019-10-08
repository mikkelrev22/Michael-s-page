import React from 'react'

const ResumeText = (props) => {
  const text = props.text.split('\n')
  const listText = text.map((e, i)=> 
  <li key={i}>{e}</li>)
  return (
    <div>
     <ul> {listText}</ul>
    </div>
  )
}

export default ResumeText