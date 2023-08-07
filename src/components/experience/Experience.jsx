import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>Mine ferdigeter</h2>
      <h2 className='h2_heading'>innen Frontend og Design</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3 className='h3_heading'>Frontend erfaring</h3>
          <div className='experience__content'>
            <article className=''>
              <h4 className='h4_heading'>* HTML</h4>
              <p className=''>Erfaren</p>
             </article>

             <article className=''>
              <h4>* CSS</h4>
              <p className=''>Erfaren</p>
             </article>

             <article className=''>
              <h4>* Javascript</h4>
              <p className=''>Nybegynner</p>
             </article>

             <article className=''>
              <h4>* React</h4>
              <p className=''>Erfaren</p>
             </article>

             <article className=''>
              <h4>* Github</h4>
              <p className=''>Erfaren</p>
             </article>

             <article className=''>
              <h4>* NextJS</h4>
              <p className=''>Erfaren</p>
             </article>

          </div>

        </div>
        {/* END OF FRONTEND */}

        <div className='experience__design'>
        <h3 className='h3_heading'>Design erfaring</h3>
          <div className='experience__content'>
            <article className=''>
              <h4>* QuarkXp</h4>
              <p className=''>Særs erfaren</p>
             </article>

             <article className=''>
              <h4>* Photoshop</h4>
              <p className=''>Særs erfaren</p>
             </article>

             <article className=''>
              <h4>* Illustrator</h4>
              <p className=''>Erfaren</p>
             </article>

             <article className=''>
              <h4>* Indesign</h4>
              <p className=''>Nybegynner</p>
             </article>

             <article className=''>
              <h4>* Acrobat</h4>
              <p className=''>Erfaren</p>
             </article>

             <article className=''>
              <h4>* Word</h4>
              <p className=''>Erfaren</p>
             </article>

        </div>

      </div>
</div>
</section>
  )
}

export default Experience