import React from 'react'
import './header.css'
import CTA from './CTA'
import AboutME from '../../assets/AboutME.png'
import Socials from './Socials'

function Header() {
  return (
   <header >
    <div className="continer header_container" id='header'>
      <h5>Hello I'm</h5>
      <h1>Sherrick McNeal</h1>
      <h5 className="text-light"> Fullstack Developer</h5>
      <CTA/>
      <Socials/>

    <div className="me">
      <img src={AboutME} alt="img" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>

   </header>
  )
}

export default Header