import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='h5_heading'>Mine ferdigeter</h5>
      <h2 className='h2_heading'>innen Frontend og Design</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3 className='h3_heading'>Frontend erfaring</h3>
          <div className='experience__content'>
            <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>HTML</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>CSS</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Javascript</h4>
              <p className='text-light text-lg'>Nybegynner</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>React</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Github</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>NextJS</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

          </div>

        </div>
        {/* END OF FRONTEND */}

        <div className='experience__design'>
        <h3 className='h3_heading'>Design erfaring</h3>
          <div className='experience__content'>
            <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>QuarkExpress</h4>
              <p className='text-light text-lg'>Særs erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Photoshop</h4>
              <p className='text-light text-lg'>Særs erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Illustrator</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Indesign</h4>
              <p className='text-light text-lg'>Nybegynner</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Acrobat</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

             <article className=''>
              <AiFillCheckCircle className='experience__details-icons' />
              <div>
              <h4>Word</h4>
              <p className='text-light text-lg'>Erfaren</p>
              </div>
             </article>

        </div>

      </div>
</div>
</section>
  )
}

export default Experience