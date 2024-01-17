import React from 'react'
import card from './image 12.png'
import Card1 from './Group 65 (1).png'
export default function Card() {
  return (
    <div className="card">
        <img src={card} alt="" srcset="" className='card--image'/>
         <div className="card--stats">
          <img src={Card1} alt="" srcset=""  className='card--star'/>
         </div>
    </div>
  )
}
