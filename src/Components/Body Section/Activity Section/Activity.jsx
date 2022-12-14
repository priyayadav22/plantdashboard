import React from 'react'
import './activity.css'

import {BsArrowRightShort} from 'react-icons/bs'
const Activity = () => {
  return (
    <div className='activitySection'>
      <div className='heading flex'>
        <h1 Recent Activity></h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer grid'>
        <div className='singleCustomer flex'>
          <img src='https://img.freepik.com/free-photo/african-american-woman-smiling-with-hand-chin_53876-128805.jpg?w=2000' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Ola Maratha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>50 sec ago</div>
        </div>
        
        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2015/09/13/03/42/skin-care-937667_1280.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Ommin Slexh</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>1  min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2014/05/26/14/01/beauty-354565__480.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Jennifer Port</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>5 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2016/11/29/02/59/girl-1866959__480.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Annie Aniston</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>16 min ago</div>
        </div>

        
        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2016/11/29/13/52/woman-1870004__480.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Kate Wilde</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>56 min ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2019/11/26/15/16/smiling-4654734__480.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Mila Cruz</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>1 hour ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2017/06/24/09/56/womens-2437214__480.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Zoe Blanchett</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>1 hour ago</div>
        </div>

        <div className='singleCustomer flex'>
          <img src='https://cdn.pixabay.com/photo/2020/03/22/12/41/black-women-4957032__480.jpg' alt='Customer img'/>
          <div className='CustomerDetails'> 
            <span className='name'> Emma Watson</span>
            <small>Ordered a new plant</small>
          </div>
          <div className='duration'>2 hour ago</div>
        </div>
      </div>
    </div>
  )
}

export default Activity