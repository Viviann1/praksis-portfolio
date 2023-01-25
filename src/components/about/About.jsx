import React from 'react'
import './about.css'
import ME from '../../assets/aboutme.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Bli kjent</h5>
      <h2>med meg</h2>
      
      <div className='container about__container'>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt='About Image' />
            </div>
          </div>
          
          <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Erfaring</h5>
              <h6>Nylært frontend utvikler</h6>
              <small>7+ års erfaring som grafisk designer</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Kunder</h5>
              <small>jobbet med små og store kunder</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon' />
              <h5>Prosjekter</h5>
              <h6>Nylært frontend utvikler</h6>
              <small>noe kode og noe design</small>
            </article>

          </div>
          <p>Kreativ sjel med bakgrunn som grafisk designer/
AD i reklamebyråer.
Jobbet som grafisk designer i Gazette 
- gratis-magasin på Lanzarote. 
Var med på å starte opp og drev kunst/håndverksbutikk/kollektiv i Irland.  
Vil nå tilbake til å jobbe mer med det kreative 
og vil derfor utvide mine kunnskaper. 
Jobber nå hardt for å bli god på koding og kunne designe mine egne nettsider. 
Har mange idèer 
- og ser fram til å få de gjennomført!</p>

<a href='#contact' className='btn btn-primary'>La oss snakke</a>
          </div>
      </div>
    </section>
  )
}

export default About