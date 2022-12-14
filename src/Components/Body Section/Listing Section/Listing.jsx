import React from 'react'
import './listing.css'

import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

import {BsArrowRightShort} from 'react-icons/bs'

import plant1 from '../../../Assests/plant1.png'
import plant2 from '../../../Assests/plant2.png'
import plant3 from '../../../Assests/plant3.png'
import plant4 from '../../../Assests/plant4.png'
import plant5 from '../../../Assests/plant5.png'
import plant6 from '../../../Assests/plant6.png'
const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
        See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={plant1} alt='imggg'/>
          <h3>Pothos</h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={plant3} alt='imggg'/>
          <h3>Boston Fern</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={plant5} alt='imggg'/>
          <h3>Bamboo </h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={plant6} alt='imggg'/>
          <h3>Red Cactus</h3>
        </div>

        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={plant2} alt='imggg'/>
          <h3>Jade Plant</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={plant4} alt='imggg'/>
          <h3>Ferns Plant</h3>
        </div>
      </div>
      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>


          <div className='card flex'>
            <div className='users'>
              <img src="https://images.squarespace-cdn.com/content/v1/5324e250e4b0fb8ebe738d2b/1599722791213-3G1XRATXH5VH2S8OT8HU/Gosnell_Big_Woods_Preserve_Webster_Park_Rochester_Senior_Portrait_Session_JILL_STUDIO_Rochester_NY_Photographer_9834.jpg" alt= 'User Image'/>

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSt77wnbtczjM8xzXmes16QcHmTxfKbow_tw&usqp=CAU" alt= 'User Image'/>

              <img src="https://static.vecteezy.com/system/resources/thumbnails/003/492/047/small/closeup-portrait-of-a-charming-girl-over-blue-studio-background-image-free-photo.jpg" alt= 'User Image'/> 

              <img src="https://burst.shopifycdn.com/photos/young-woman-portrait-natural-light.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt= 'User Image'/>

              <img src="https://assets.gqindia.com/photos/5d84c8f81783960008898631/master/pass/Radhika-01.jpg" alt= 'User Image'/> 
            </div>
            <div className='cardText'>
              <span>
                10,567 Plants Sold <br/>
                <small>
                  11 Sellers 
                  <span className='date'>
                  7 Days
                   </span>
                </small>
              </span>
            </div>
          </div>
        </div>


        <div className='featuredSellers'>
          <div className='heading flex'>
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
            See All
          <BsArrowRightShort className='icon'/>
            </button>
          </div>


          <div className='card flex'>
            <div className='users'>
              <img src="https://burst.shopifycdn.com/photos/young-woman-portrait.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt= 'User Image'/>

              <img src="https://assets.gqindia.com/photos/5d84c8f81783960008898631/master/pass/Radhika-01.jpg" alt= 'User Image'/> 

              <img src="https://media.istockphoto.com/id/104821907/photo/smiling-businesswoman-leaning-against-whiteboard-and-drinking-coffee.jpg?s=170667a&w=0&k=20&c=5PzIA803ReZEpXmJ2ksyxjBl0ur_VGvOkdCj8SxphYk=" alt= 'User Image'/>


              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QZh-XgFYzjVsLCss0Ze4Lq3ouHhLkvPqPw&usqp=CAU" alt= 'User Image'/> */}

              <img src="https://static.vecteezy.com/system/resources/thumbnails/003/492/047/small/closeup-portrait-of-a-charming-girl-over-blue-studio-background-image-free-photo.jpg" alt= 'User Image'/> 
            </div>
            <div className='cardText'>
              <span>
                87,567 Plants Sold <br/>
                <small>
                  97 Sellers 
                  <span className='date'>
                  31 Days
                   </span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing