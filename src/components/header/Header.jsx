import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/modifiedme.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hei, jeg heter</h5>
        <h1>Viviann Heggestad</h1>
        <h5 className='text-light'>Designer and frontend utvikler</h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
      </div>
    </header>
  )
}

export default Header