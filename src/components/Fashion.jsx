import React from 'react'
import './Fashion.css'
import designer from './Assets/fashion-designer.webp'
import perfect from './Assets/perfect suit.jpg'
import FashionNav from './FashionNav'

function Fashion() {
  return (
    <div className='fashion-body'>
        <FashionNav/>
        <div className='fashion-down'>
            <img src={perfect} alt="man in suit" id='img' />
            <div className="fashion-group">
                <div className='fashion-content'>
                    <h1>We make Outfits that Suit you</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique autem incidunt ex nulla magnam cupiditate vero atque corrupti perferendis, totam quia consequuntur. Laudantium fuga tempore esse ducimus, eaque autem maxime.</p>
                    <button>Our Services</button>
                </div>
                <div>
                    <img src={designer} alt="designer" width={650} height={700} id="dress" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fashion