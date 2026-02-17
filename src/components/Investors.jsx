import React from 'react'
import './investors.css'
import Image1 from '../assets/inv-one.svg'
import Image2 from '../assets/inv-two.svg'
import Image3 from '../assets/inv-three.svg'
import Image4 from '../assets/inv-four.svg'

const Investors = () => {
  return (
    <div className='investor'>
      <div className='investor-content'>
        <h1>Investors</h1>
        <p>We are backed by marquee investors who share our vision, passion, and commitment to first principles.</p>
        <div className='investor-icons'>
            <img src={Image1} alt='Investor 1' />
            <img src={Image2} alt='Investor 2' />
            <img src={Image3} alt='Investor 3' />
            <img src={Image4} alt='Investor 4' />
        </div>
      </div>
    </div>
  )
}

export default Investors
