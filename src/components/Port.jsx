import React from 'react'
import './Port.css'
import { Phone } from 'phosphor-react'
import {House} from 'phosphor-react'
import {Envelope} from 'phosphor-react'
function Port() {
  return (
    <div className='with-img'>
        <div className='first-div'>
            <div className='first'>
                <div className='fd'>
                    <div className='line'><h4>FASHION DESIGNER</h4></div>
                </div>        
                <div className='prof'>
                    <h5>PROFESSION</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h5>SKILLS</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>


            <div className='second'>
                <div className='img-div'></div>
                <p className='my-p'>Hello, I'm</p>
                <h2>IDOKO <br/> CHRISTOPHER A.</h2>
                <div className='lines'></div>
                <p className='my-p'>Contact Info</p>
                <div className='icons'>
                    <div className='sub-icons'><Phone size={20} color="#000" weight="fill" /><a href ='tel:07039514066'> 07039514066</a></div>
                    <div className='sub-icons'><House size={20} color="#000" weight="fill" />No 8 Poultry road, Jahi Abuja</div>
                    <div className='sub-icons'><Envelope size={20} color="#000" weight="fill" /><a href="mailto:chrixantoz@gmail.com">chrixantoz@gmail.com</a></div>
                </div>

                <div className='wrap'>
                    <h5>PROFILE</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis non exercitationem obcaecati sunt ullam cupiditate aliquam, officiis suscipit! Minima consectetur quam eius iusto quia dolores tempora cupiditate nisi. Possimus.
                        </p>

                    <h5>WORK EXPERIENCE</h5>
                    <h6>JOB TITLE HERE | COMPANY NAME</h6>
                        <span>2019-2020</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti quidem sunt id obcaecati aut quia dolore eius quo sit fugiat fugit delectus, ipsa dolor nemo incidunt nostrum dicta official.                         
                    </p>
                </div>    
            </div>           
        </div>     
    </div>
  )
}

export default Port