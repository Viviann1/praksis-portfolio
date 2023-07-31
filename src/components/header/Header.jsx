import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/paint.jpg'
import ME2 from '../../assets/me.jpg'
import ME3 from '../../assets/me3.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="w-full max-w-7xl">
        <h5 className='text-light'>Hei!</h5>
        <h1>Viviann Heggestad</h1>
        <h5 className='text-light'>Frontend utvikler, designer og blomster elsker</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <div className='me2'>
          <img src={ME2} alt='me2' />
        </div>
        <div className='me3'>
          <img src={ME3} alt='me3' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
 
export default Header