import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import {TiSocialInstagramCircular} from 'react-icons/ti'

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/sherrick-mcneal-725183193/" ><BsLinkedin/></a>
      <a href="https://github.com/SherrickM/" ><FaGithub/></a>
      <a href="https://www.instagram.com/s.marquis_" ><TiSocialInstagramCircular/></a>
    </div>
  )
}

export default Socials