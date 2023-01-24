import React from 'react'
import CV from '../../assets/smallCV-figma.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Last ned CV</a>
        <a href='#contact' className='btn btn-primary'>La oss snakke litt</a>
    </div>
  )
}

export default CTA
