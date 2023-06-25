import React, { useState } from 'react'
import "./Sidebar.css"
import {BiHomeAlt} from "react-icons/bi"
import { AiOutlineFundProjectionScreen, AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai"
import { AiOutlineDotChart } from "react-icons/ai"
import { BsCircleFill, BsCreditCardFill } from "react-icons/bs";



const Sidebar = () => {

  const [currentLink, setCurrentLinks] = useState(1)

  return (
    <div className='section'>
      <div className='top'>
        <div className='brand'>
          <BsCircleFill className="color1"/>
          <BsCircleFill className="color2"/>
          <BsCircleFill className="color3"/>
        </div>
        <div className="links">
          <ul>

          <li className={currentLink === 1 ? "active" : "none"} onClick={()=> setCurrentLinks(1)}>
            <a href='#'>
              <BiHomeAlt/>
            </a>
          </li>

          <li className={currentLink === 2 ? "active" : "none"} onClick={()=> setCurrentLinks(2)}>
            <a href='#'>
              <AiOutlineFundProjectionScreen />
            </a>
          </li>

          <li className={currentLink === 3 ? "active" : "none"} onClick={()=> setCurrentLinks(3)}>
            <a href='#'>
              <AiOutlineFileText />
            </a>
          </li>

          <li className={currentLink === 4 ? "active" : "none"} onClick={()=> setCurrentLinks(4)}>
            <a href='#' className='notification'>
              <BsCreditCardFill />
              <span>2</span>
            </a>
          </li>

          <li className={currentLink === 5 ? "active" : "none"} onClick={()=> setCurrentLinks(5)}>
            <a href='#'>
              <AiOutlineTrophy/>
            </a>
          </li>

          <li className={currentLink === 6 ? "active" : "none"} onClick={()=> setCurrentLinks(6)}>
            <a href='#'>
              <AiOutlineDotChart/>
            </a>
          </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

