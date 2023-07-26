import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 className='h2_heading'>Her kan du kontakte meg</h2>
      
      <div className="container contact__container">
       
       <div className="contact__options">
        <article className='contact__option'>
          <h3 className='h3_heading'>Email</h3>
          <h4 className='mail'>viviann.kodehode@gmail.com</h4>
          <a href="mailto:viviann.kodehode@gmail.com" rel='_external'>Send en epost</a>
        </article>

        <article className='contact__option'>
          <h3 className='h3_heading'>Messenger</h3>
          <a href="https://www.facebook.com/messages/t" rel='_external'>Send en melding på messenger</a>
        </article>

        
        </div> 
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Fullt navn' required />
          <input type='email' name='email' placeholder='Epost' required />
          <textarea name="message" rows="7" placeholder='Din melding' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact