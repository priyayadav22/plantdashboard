import React from 'react'
import './sidebar.css'

import asd from '../../Assests/asd.png'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { MdOutlineExplore } from 'react-icons/md'
import { BsTrophy} from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsCreditCard2Front} from 'react-icons/bs'
import { BsQuestionCircle} from 'react-icons/bs'
const Sidebar = () => {
  return (
    <div className='sidebar grid'>
      <div className='logoDiv flex'>
      <img src={asd} alt='imagename' />

        <h2>Planti.</h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className="flex" />
              <span className='smalltext'>
                DashBoard
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdDeliveryDining className="flex" />
              <span className='smalltext'>
                My Order
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdOutlineExplore className="flex" />
              <span className='smalltext'>
                Explore
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BsTrophy className="flex" />
              <span className='smalltext'>
                Products
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className='settingsDiv'>
        <h3 className='divTitle'>
          SETTINGS
        </h3>
        <ul className='menuLists grid'>
          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <AiOutlinePieChart className="flex" />
              <span className='smalltext'>
                Charts
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BiTrendingUp className="flex" />
              <span className='smalltext'>
                Trends
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <MdOutlinePermContactCalendar className="flex" />
              <span className='smalltext'>
                Contact
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href='#' className='menuLink flex'>
              <BsCreditCard2Front className="flex" />
              <span className='smalltext'>
                Billing
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className='sideBarCard'>
        <BsQuestionCircle className= "icon"/>
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>
          <h3>Help Center</h3>
          <p>Having trouble in Planti. , please contact us...</p>
          <button className='btn'>Go to Help Center</button>
        </div>
      </div>
    </div>
  )

}

export default Sidebar