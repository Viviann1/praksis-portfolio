import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hei, jeg heter</h5>
        <h1>Viviann Heggestad</h1>
        <h5 className='text-light'>Designer and frontend utvikler</h5>

      </div>
    </header>
  )
}

export default Header