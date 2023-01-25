import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/moviestream.jpg'
import IMG2 from '../../assets/countdown.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Min design</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Movie streamer</h3>
          <div className='portfolio__item-cta'> 
          <a href="https://www.figma.com/file/S8o5n1TUES4EfF4fmdwugc/Modul-C-sep22---Viviann-Moviestreamer?node-id=0%3A1&t=VatVqMMaGNZSWKml-1" className='btn btn-primary' target='_blank'>Figma</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Nedteller til jul</h3>
          <div className="portfolio__items-cta"> 
          <a href="https://github.com/Viviann1/juleoppgave.git" className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio