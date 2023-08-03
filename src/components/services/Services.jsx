import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
    <h2>Mine</h2>
    <h2 className='h2_heading'>nøkkelkvalifikasjoner</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
        <h4>Erfaring innen</h4>
        <h2>UI/UX</h2>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon' />
            <p className='services_p'>Praksis som Frontend Utvikler i Kodeverket.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Utviklet i team Hjerteting nettbutikk løsning.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Jobbet i team med å kode Jobbjakt nettside.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Laget nedtelling til jul i React.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>+++ sjekk github for mer.</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX */}      <article className='service'>
        <div className='service__head'>
        <h4>Nøkkelkvalifikasjoner</h4>
        <h2>Design</h2>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon' />
            <p>7 års erfaring som art director/grafisk designer.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Utdanning innen grafisk design, utstillingsdesign og tegning.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Erfaring fra magasinproduksjon og formgivning av brosjyrer, kataloger oa.</p>
          </li>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Designet profil/nettbuikk for Hjerteting.</p>
          </li>
        </ul>
      </article>
      {/* END OF DESIGN */}

      <article className='service'>
        <div className='service__head'>
        <h4>Personlige</h4>
        <h2>Egenskaper</h2>
        </div>

        <ul className='service__list'>
          <li>
            <BsCheck className='service__list-icon' />
            <p>Kreativ, omgjengelig og positivt innstilt.</p>
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
            <p>Entreprenør. Etablert og drev kunstbutikk i Carlingford, Irland.</p>
          </li>
        </ul>
      </article>

    </div>
    </section>
  )
}

export default Services