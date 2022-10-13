import React from 'react'
import './Fashion.css'
import xantoz from './Assets/xantoz.png'
import {Link} from 'react-router-dom'

function FashionNav() {
  return (
    <div>
        <div className='fashion-nav'>
            <div className='fashion-left'>
                <img src={xantoz} alt="xantoz" width={50} height={50}/>
                <h2>Xantoz Fashion</h2>
            </div>
            <div className='fashion-right'>
                <div>
                    <ul>
                    <Link to="/fashion"><li>Home</li></Link>
                    <Link to="/about-us"><li>About</li></Link>
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
    </div>
  )
}

export default FashionNav