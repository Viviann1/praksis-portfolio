import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='h2_heading'>Her kan du kontakte meg</h2>
      
      <div className="container contact__container">
       
       <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon' />
          <h3 className='h3_heading'>Email</h3>
          <h4>viviann.kodehode@gmail.com</h4>
          <a href="mailto:viviann.kodehode@gmail.com" rel='_external'>Send en epost</a>
        </article>

        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon' />
          <h3 className='h3_heading'>Messenger</h3>
          <a href="https://www.facebook.com/viviann.heggestad" rel='_external'>Send en melding</a>
        </article>

        
        </div> 
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Fullt navn' required />
          <input type='email' name='email' placeholder='Epost' required />
          <textarea name="message" rows="7" placeholder='Din melding' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact