import React from 'react'
import './hero.css'
import BankingPartners from '../assets/bank-list.png'
import HeroVid from '../assets/Hero-Vid.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='hero-left'>
            <h1>Say Hi to</h1>
            <h2>One Credit Card</h2>
            <h4>Our Banking Partners:</h4>
            <img src={BankingPartners} alt='banking-partners' />
            <p>India's best metal credit card. Built with full-stack tech.<br />
                Backed by the principles of simplicity, transparency, and <br />
                giving back control to the user.
            </p>
            <button className='btn'>Apply Now</button>
        </div>
        <div className='hero-right'>
            <video src={HeroVid} muted='muted' autoPlay='autoplay' loop='loop' />
        </div>
      </div>
    </div>
  )
}

export default Hero
