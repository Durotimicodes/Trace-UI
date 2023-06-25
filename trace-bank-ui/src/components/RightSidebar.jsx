import React from 'react'
import "./RightSidebar.css"
import Notification from './Notification'
import Card from './Card'
import Activity from './Activity'
import Payment from './Payment'


const RightSidebar = () => {
  return (
    <div className='section__rightbar'>
      <div className='grid'>
        <Notification/>
        <Card/>
        <Activity/>
        <Payment/>
      </div>
    </div>
  )
}

export default RightSidebar
