import React from 'react'
import './about.css'
import ABOUT2 from '../../assets/aboutme.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <div className='headings'>
      <h2>Litt</h2>
      <h2 className='h2_heading'>om meg</h2>
      </div>

      <div className='container about__container'>
          <div className="about__me">
            <div className="about__me-image">
              <img src={ABOUT2} alt='About Image' />
            </div>
          </div>
          
          <div className="about__content">
          <div className="about__cards">
             <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Erfaring</h5>
              <p>Frontend Utvikler hovedvekt på design.</p>
              <p>7+ års erfaring som Art Director og Grafisk Designer.</p>
              <p>Content Manager for Hjerteting.</p>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Kunder</h5>
              <p>Jobbet med både små og store bedrifter.</p>
              <p>Vant med å jobbe direkte med kunden.</p>
              <p>Tidligere kunder Telenor, Procean, Radisson Hotel Bergen, BBT, Kärcher mm.</p>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon' />
              <h5>Prosjekt</h5>
              <p>Nettbutikkløsning <br />Hjerteting</p>
              <p>Jobbjakt nettside - jobbet i team på løsning</p>
              <p>Se Github for flere kode prosjekt</p>
              <p>Art Director Telenorbygget Kokstad - brosjyrer ved åpning</p>
            </article>

          </div>
          <p className='darkp'>Kreativ sjel som er akkurat ferdig med praksis som Frontend Utvikler i Kodeverket Bergen.<br />  
            Min styrke ligger i designerfaring som gjenspeiles i min kode.<br />
      Har bakgrunn som Art  Director/Grafisk Designer i reklamebyråer. 
      Jobbet som Grafisk Designer i Gazette, et gratis-magasin på Lanzarote. 
      <br /> Var med på å starte opp og drev kunst og håndverksbutikk i Irland.  
</p>
<a href='#contact' className='btn btn-primary'>Ta kontakt</a>
          </div>
      </div>
    </section>
  )
}

export default About