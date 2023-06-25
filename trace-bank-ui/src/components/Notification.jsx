import React from 'react'
import './Notification.css'
import { AiOutlineBell, AiOutlineCalendar } from "react-icons/ai"
import { AiOutlineCaretDown } from "react-icons/ai"
import avatarImage from "../assests/avatar.jpg"

const Notification = () => {
  return (
    <div className='section__navbar'>
      <div className='notification'>
        <AiOutlineCalendar className='font__icon'/>
        <AiOutlineBell className='font__icon'/>
          <div className='image'>
            <img src={avatarImage} alt='user image'/>
          </div>
        <AiOutlineCaretDown/>
    </div>
    </div>
  )
}

export default Notification
