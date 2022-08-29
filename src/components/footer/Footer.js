import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import {TiSocialInstagramCircular} from 'react-icons/ti'
import {FaFacebookF} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      
      <a href="#header" className='footer_logo'>Code by SM2 </a>
      
      
      <ul className="permalinks">
       
        <li><a href="#header">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="mailto:smcneal89@gmail.com">Contact</a></li>
      </ul>

    <div className="footer_socials">  
        
        <a href="https://www.facebook.com/sherrick.marquis/"><FaFacebookF/></a>
        <a href="https://www.linkedin.com/in/sherrick-mcneal-725183193/" ><BsLinkedin/></a>
        <a href="https://github.com/SherrickM/" ><FaGithub/></a>
        <a href="https://www.instagram.com/s.marquis_" ><TiSocialInstagramCircular/></a>
        
     </div>


    </footer>
  )
}

export default Footer