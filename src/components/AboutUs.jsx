import React from 'react'
import './AboutUs.css'
import Clip from './Assets/clip.webp'
import Boss from './Assets/boss.png'
import FashionNav from './FashionNav'

function AboutUs() {
  return (
    <div className='all'>
        <FashionNav/>
        <div className='backup'></div>
        <div className='backdown'></div>
        <div className='flexer'>
            <div className='upper'>
                <h1>About Us</h1>
                    <p>Our mission is what drives us to do everything possible to expand human potentials. We do that by creating groundbreaking and outstanding fashion innovations, by making our products more sustainable and accessible, by building creative and diverse team for the benefit of our communities at work and where we live. We extend and communicate our African cultural abilities globally through fashion.</p>
                    <button></button>
            </div>
            <div className='lower'>
                <img src={Clip} alt="clip-art" />
            </div>
        </div>
        <div className='ceo'>
            <div className='meet'>
                <h1>Meet the CEO</h1>
                <p>Xantoz Group was founded by Engr. Christopher Idoko A. and is aimed at bringing diverse team with fashionable ideas together to protect and contribute devotedly to the world of fashion. Engr. Chris is a fashion designer with striking thoughts of making out of the world ideas to reality in no time! He's into real estate and also doing very well with structural designs playing out his potentials.</p>
            </div>
            <div className='boss'>
            <img src={Boss} alt="boss" />
            </div>
        </div>

    </div>
  )
}

export default AboutUs