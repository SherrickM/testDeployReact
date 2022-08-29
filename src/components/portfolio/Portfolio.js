import React from 'react'
import './portfolio.css'
import codeQuiz from '../../assets/codeQuiz.jpg'
import HomeMade from '../../assets/HomeMade.jpg'
import weatherApp from '../../assets/weatherApp.jpg'
import NoteTaker from '../../assets/NoteTaker.jpg'
import politeMail from '../../assets/politeMail.jpg'
import SumItUp from '../../assets/SumItUp.jpg'
import {FaGithub} from  'react-icons/fa'
import {BiMoviePlay} from  'react-icons/bi'



function Portfolio() {
  return (
    <section id="portfolio">

      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {/* Portfolio Item 1 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img">
                  <img src={politeMail} className= "inner-img-style" alt="" />
              </div>
              <h3>Polite-Mail</h3>
                <div className="portfolio-item-cta">
                  <a href="https://github.com/SherrickM/polite-mail" className='about-icon'><FaGithub/></a>
                  <a href="https://polite-mail.herokuapp.com/" className='about-icon'><BiMoviePlay/></a>
                </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img">
                  <img src={SumItUp} className= "inner-img-style" alt="" />
              </div>
              <h3>Sum It Up</h3>
              <div className="portfolio-item-cta">

                <a href="https://github.com/SherrickM/sum-it-up" className='about-icon'><FaGithub/></a>
                <a href="https://sum-it-up2.herokuapp.com/" className='about-icon'><BiMoviePlay/></a>
              </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img">
                  <img src={HomeMade} className= "inner-img-style" alt="" />
              </div>
              <h3>HomeMade</h3>
                <div className="portfolio-item-cta">
                  <a href="https://github.com/SherrickM/homemade" className='about-icon'><FaGithub/></a>
                  <a href="https://sherrickm.github.io/homemade/" className='about-icon'><BiMoviePlay/></a>
                </div>
            </div>

          {/* Portfolio Item 4 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img">
                  <img src={codeQuiz} className= "inner-img-style" alt="" />
              </div>
              <h3>Code Quiz</h3>
                <div className="portfolio-item-cta">
                  <a href="https://github.com/SherrickM/code-quiz-project" className='about-icon'><FaGithub/></a>
                  <a href="https://sherrickm.github.io/code-quiz-project/" className='about-icon'><BiMoviePlay/></a>
                </div>
          </div>

          {/* Portfolio Item 5 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img">
                  <img src={weatherApp} className= "inner-img-style" alt="" />
              </div>
              <h3>Weather Dashboard</h3>
                <div className="portfolio-item-cta">
                  <a href="https://github.com/SherrickM/weather-dashboard" className='about-icon'><FaGithub/></a>
                  <a href="https://sherrickm.github.io/weather-dashboard/" className='about-icon'><BiMoviePlay/></a>
                </div>
          </div>

          {/* Portfolio Item 6 */}
          <div className="portfolio_item">
              <div className="portfolio_item_img">
                  <img src={NoteTaker} className= "inner-img-style" alt="" />
              </div>
              <h3>Note Taker</h3>
                <div className="portfolio-item-cta">
                  <a href="https://github.com/SherrickM/note-taker" className='about-icon'><FaGithub/></a>
                  <a href="https://guarded-springs-98042.herokuapp.com/" className='about-icon'><BiMoviePlay/></a>
                </div>
          </div>

      </div>

    </section>
  )
}

export default Portfolio