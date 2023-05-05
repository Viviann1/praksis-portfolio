import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='h5_heading'>Min design</h5>
      <h2 className='h2_heading'>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <h3 className='h3_heading'>Movie streamer</h3>
          <div className='portfolio__item-cta'> 
          <a href="https://www.figma.com/file/S8o5n1TUES4EfF4fmdwugc/Modul-C-sep22---Viviann-Moviestreamer?node-id=0%3A1&t=VatVqMMaGNZSWKml-1" className='btn btn-primary' rel='_external'>Figma</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <h3 className='h3_heading'>Nedteller til jul</h3>
          <div className="portfolio__item-cta"> 
          <a href="https://github.com/Viviann1/juleoppgave.git" className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <h3 className='h3_heading'>Hjerteting</h3>
          <div className="portfolio__item-cta"> 
          <a href="https://www.hjerteting.no/" className='btn'>Nettbutikk</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio