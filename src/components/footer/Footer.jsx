import React from 'react'
import { HiMail } from "react-icons/hi";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-title'>BURGER KING® DELIVERY</div>
        <div className='second-row'>
          <div className='footer-left-section'>
            <div className='footer-subtitle'>
              <ImPhone size={16} className='icon-phone'/>
              15000 25
            </div>
            <div className='footer-subtitle-2'>
              <HiMail size={18} className='icon-mail'/>
              guestservice@burgerking.co.id 
            </div>
          </div>
          <div className='footer-subtitle-3'>
            <RiFacebookFill size={18} className='fb'/>
            <RiInstagramLine size={18} className='ig'/>
            <RiTwitterFill size={18} className='tw'/>
            <RiYoutubeFill size={18} className='yt'/>
          </div>
        </div>
        <div className='third-row'>
          <Link>About us</Link>
          <p>|</p>
          <Link>Kebijakan privasi</Link>
          <p>|</p>
          <Link>Syarat dan ketentuan</Link>
          <p>|</p>
          <Link>TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer