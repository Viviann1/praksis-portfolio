import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>VIVIANN</a>

      <ul className='permalinks'>
        <li><a href="#">Hjem</a></li>
        <li><a href="#about">Om meg</a></li>
        <li><a href="#experience">Mine ferdigheter</a></li>
        <li><a href="#services">Nøkkelkvalifikasjoner</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonials">Referanser</a></li>
        <li><a href="#contact">Kontakt meg</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><FaFacebookSquare /></a>
        <a href="https://instagram.com"><AiOutlineInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer