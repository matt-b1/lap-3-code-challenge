import React from 'react'


const Card = (props) => {
  console.log(props);
  return (
    <div>
      <p>Name: {props.name}</p>
    </div>
  )
}

export default Card
