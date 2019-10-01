import React from 'react'

const ResumeText = (props) => {
  const textSplit = props.text.split('\n')
  const text = textSplit.slice(0, textSplit.length-1)
  const listText = text.map((e, i)=> 
  <li key={i}>{e}</li>)
  return (
    <div>
     <ul> {listText}</ul>
    </div>
  )
}

export default ResumeText