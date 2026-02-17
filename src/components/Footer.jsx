import React from 'react'
import './footer.css'
import LogoWhite from '../assets/Logo-white.png'
import { AiOutlineFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import BankList from '../assets/bank-list.png'
import Image1 from "../assets/footer-one.jpg";
import Image2 from '../assets/footer-two.png'
import Image3 from '../assets/footer-three.jpg'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-top'>
                    <img src={LogoWhite} alt="Logo White" />
                    <div className='love'>
                        <p>Made with <span>❤️</span> by Dittya Maity</p>
                    </div>
                    <h3>We are all ears!</h3>
                    <p>We are a new kid on the block, eager to learn.</p>
                    <p>All ideas and suggestions are welcome.</p>
                </div>
                <div className='footer-second'>
                    <h4>Follow Us On</h4>
                    <div className='social-icons'>
                        <AiOutlineFacebook />
                        <FaSquareXTwitter className='twitter-icon' />
                        <RxInstagramLogo />
                        <RiLinkedinBoxLine />
                        <RiYoutubeLine />
                    </div>
                </div>
                <div className='footer-third'>
                    <div className='left'>
                        <h5>Credit Card Terms</h5>
                        <ul>
                            <li>BOBCARD</li>
                            <li>CSB BANK</li>
                            <li>FEDERAL BANK</li>
                            <li>IDFC BANK</li>
                            <li>SBM BANK</li>
                            <li>SOUTH INDIAN BANK</li>
                            <li>INDIAN BANK</li>
                            <li>Authorized Collection Agencies</li>
                            <li>EMI Terms And Conditons</li>
                        </ul>
                    </div>
                    <div className='middle'>
                        <h5>Important Links</h5>
                        <ul>
                            <li>Cookie Policy</li>
                            <li>Do Not Disturb</li>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>Unparliamentary language</li>
                            <li>Secure Usage Tips</li>
                            <li>Caution on Official Contact Info</li>
                            <li>OneCard UPI Terms of Use</li>
                            <li>BBPS Terms of Use</li>
                            <li>Responsible Disclosure Policy</li>
                        </ul>
                    </div>
                    <div className='right'>
                        <h5>Company</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Join Us</li>
                            <li>POSH @ Work</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <img src={BankList} alt="Bank List" />
                    <div className='bottom'>
                        <img src={Image1} alt="Footer Image 1" />
                        <img src={Image2} alt="Footer Image 2" />
                        <img src={Image3} alt="Footer Image 3" />
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2025 FPL Technologies Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
