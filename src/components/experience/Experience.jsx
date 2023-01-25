import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mine ferdigeter</h5>
      <h2>innen Frontend og Design</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend erfaring</h3>
          <div className='experience__content'>
            <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Nybegynner</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Github</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

          </div>

        </div>
        {/* END OF FRONTEND */}

        <div className='experience__design'>
        <h3>Design erfaring</h3>
          <div className='experience__content'>
            <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>QuarkExpress</h4>
              <small className='text-light'>Særs erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Photoshop</h4>
              <small className='text-light'>Særs erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Illustrator</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Indesign</h4>
              <small className='text-light'>Nybegynner</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Acrobat</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Word</h4>
              <small className='text-light'>Erfaren</small>
              </div>
             </article>

        </div>

      </div>
</div>
</section>
  )
}

export default Experience