import React from 'react'
import { FcSimCardChip } from "react-icons/fc"
import mastercard from "../assests/mastercard.png"
import './Card.css'

const Card = () => {
  return (
    <div className='section__card'>
      <div className='shopping'>
        <div className='design'>
          <FcSimCardChip/>
        </div>
          <div className='number'>
            <h6>4562 1122 4595 7852</h6>
          </div>
          <div className='image'>
              <img src={mastercard} className='pic'/>
          </div>
          <div className='name'>
            <h6>CARD HOLDER</h6>
          </div>
          <div className='profile'>
            <h6>AAE IdeaPro</h6>
            <span className='t1'>Mastercard</span>
          </div>
      </div>
    </div>
  )
}

export default Card
