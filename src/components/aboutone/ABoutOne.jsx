import React from 'react'
import './AboutOne.css'

const ABoutOne = ({title, subtitle}) => {
  return (
    <div className='app__aboutone'>
      <div className='app__aboutone-title'>
        <div/>
        <h1>{title}</h1>
      </div>

      <div className='app__aboutone-text'>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default ABoutOne
