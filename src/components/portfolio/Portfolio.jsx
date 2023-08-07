import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Min</h2>
      <h2 className='h2_heading'>design Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div>
          <h3 className='h3_heading'>Movie streamer</h3>
          <p className='portfolio-p'>Skoleoppgave Kodehode</p>
          </div>
          <div className='portfolio__item-cta'> 
          <a href="https://www.figma.com/file/S8o5n1TUES4EfF4fmdwugc/Modul-C-sep22---Viviann-Moviestreamer?node-id=0%3A1&t=VatVqMMaGNZSWKml-1" className='btn btn-primary' rel='_external'>Figma</a>
          </div>
        </article>
        
        <article className='portfolio__item'>
          <div>
          <h3 className='h3_heading'>Nedteller jul</h3>
          <p className='portfolio-p'>Skoleoppgave Kodehode</p>
          </div>
          <div className="portfolio__item-cta"> 
          <a href="https://github.com/Viviann1/juleoppgave.git" className='btn'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div>
          <h3 className='h3_heading'>Hjerteting</h3>
          <p className='portfolio-p'>Butikkløsning team Kodeverket</p>
          </div>
          <div className="portfolio__item-cta"> 
          <a href="https://www.hjerteting.no/" className='btn'>Nettbutikk</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div>
          <h3 className='h3_heading'>Jobbjakt</h3>
          <p className='portfolio-p'>Utviklet nettside team Kodeverket</p>
          </div>
          <div className="portfolio__item-cta"> 
          <a href="https://www.jobbjakt.no/" className='btn'>Nettside</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div>
          <h3 className='h3_heading'>Jobbjakt design</h3>
          <p className='portfolio-p'>Min designskisse</p>
          </div>
          <div className="portfolio__item-cta"> 
          <a href="https://www.figma.com/file/7eIMFyCfICCeIndThPwvdK/Jobbjakt-forslag?type=design&node-id=0%3A1&mode=design&t=r6tFCsiU3mP2j3gG-1" className='btn'>Figma</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div>
          <h3 className='h3_heading'>Hawii design</h3>
          <p className='portfolio-p'>Min designskisse</p>
          </div>
          <div className="portfolio__item-cta"> 
          <a href="https://www.figma.com/file/BQ7E4x45no5E69Kb5H9OUe/New-design-suggestion?type=design&node-id=0%3A1&mode=design&t=DXz2aAsiledW5ttO-1" className='btn'>Figma</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio