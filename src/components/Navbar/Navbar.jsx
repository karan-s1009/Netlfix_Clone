import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo_c.png'
import bell_icon from '../../assets/bell_icon.svg' 
import search_icon from '../../assets/search_icon.svg' 
import profile_img from '../../assets/profile_img.png' 
import caret_icon from '../../assets/caret_icon.svg' 
import { logout } from '../../firebase'


const Navbar = () => {

  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  } )

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} className='icons' alt="" />
        <p>Children</p>
        <img src={bell_icon} className='icons' alt="" />
        <div className='navbar-profile'>
          <img src={profile_img} className='profile' alt="" />
          <img src={caret_icon}  alt="" />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of CineView</p>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Navbar