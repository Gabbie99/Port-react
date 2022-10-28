import React from 'react'
import './Hamburger.css'
import {Link} from 'react-router-dom'

function Hamburger() {
  return (
    <div>
        <div className='ham-div'>
        <input type="checkbox" className='res-inp'/>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                <span className='ham-span'></span>
                {/* <List size={50} /> */}
                <ul className='hamburger'>
                <Link to="/fashion"><li>Home</li></Link>
                    <Link to="/about-us"><li>About</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
        </div>
    </div>
  )
}

export default Hamburger