import React from 'react'
import LogoBlack from '../assets/logo-black.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='nav-left'>
            <img src={LogoBlack} alt='logo' />
        </div>
        <div className='nav-middle'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Credit Card</li>
                <li>Offers</li>
                <li>FAQ</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className='nav-right'>
          <button className='btn'>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
