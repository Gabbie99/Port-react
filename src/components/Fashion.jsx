import React from 'react'
import './Fashion.css'
import designer from './Assets/fashion-designer.webp'
import perfect from './Assets/perfect suit.jpg'

function Fashion() {
  return (
    <div className='fashion-body'>
        <div className='fashion-nav'>
            <div className='fashion-left'>
                <h2>Fashion Designer</h2>
            </div>
            <div className='fashion-right'>
                <div>
                    <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
                </div>
                <div>
                    <h3>VISIT US</h3>
                </div>
            </div>
        </div>
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