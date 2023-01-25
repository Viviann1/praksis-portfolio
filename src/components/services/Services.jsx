import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h5>Mine</h5>
    <h2>nøkkelkvalifikasjoner</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
        <h5>Erfaring innen</h5>
        <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Under opplæring Frontend Utvikler i Kodehode.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Laget nedtelling til jul i React.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Pokedex laget med javascript.</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX */}      <article className='service'>
        <div className='service__head'>
        <h5>Nøkkelkvalifikasjoner</h5>
        <h3>Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon' />
            <p>7 års erfaring som grafisk designer.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Utdanning innen grafisk design, utstillingsdesign og tegning.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Erfaring fra magasinproduksjon og formgivning av brosjyrer, kataloger oa</p>
          </li>
        </ul>
      </article>
      {/* END OF DESIGN */}

      <article className='service'>
        <div className='service__head'>
        <h5>Personlige</h5>
        <h3>egenskaper</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Etablert og drev kunstbutikk i Carlingford, Irland.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Selvstendig. Jeg er vant til å ta ansvar og tar tak i det som må gjøres.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Kundeorientert. Har i alle stillinger hatt tett dialog med kundene.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Kreativ og positivt innstilt.</p>
          </li>
        </ul>
      </article>

    </div>
    </section>
  )
}

export default Services