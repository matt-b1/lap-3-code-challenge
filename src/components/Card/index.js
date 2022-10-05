import React from 'react'
import './style.css'

const Card = (props) => {
  return (
    <div>
      <ul className='repos'>
        <li>{props.name}</li>
        <li>Stargazers: {props.stargazers_count}</li>
        <li>Forks: {props.forks}</li>
      </ul>
    </div>
  )
}

export default Card
