import React from 'react'
import './about.css' 
import Aboutmetoo from '../../assets/Aboutmetoo.png'
import {FaAward} from 'react-icons/fa'
import {BsFolder} from 'react-icons/bs'
import {BsEyeglasses} from 'react-icons/bs'



const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2> About Me</h2>

    <div className="container about_container">

      <div className="about_me">

        <div className="about_me_img">
          <img src={Aboutmetoo} className='aboutimg2' alt="" />
        </div>

      </div>

      {/* About Content */}

      <div className="about_content">
          <div className="about_cards">
              {/* Card 1 */}
              <div className="about-card">
                <FaAward className='about-icon'/>
                <h5> Experience</h5>
                <small> 2+ Years</small>

              </div>

                {/* Card 2 */}
                <div className="about-card">
                  <BsEyeglasses className='about-icon'/>
                  <h5> Focus </h5>
                {/* <small> UX/UI </small> */}
                <small> Web Development </small>

                </div>
                {/* Card 3 */}
              <div className="about-card">
                <BsFolder className='about-icon'/>
                <h5> Projects</h5>
                <small> 25+ Completed</small>

              </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum minus, dolor modi dignissimos fugit, soluta hic vel repudiandae veniam sed? Molestiae repellat nulla alias nostrum, pariatur nesciunt itaque voluptatum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
      </div>


    </div>

     
    </section>
  )
}

export default About