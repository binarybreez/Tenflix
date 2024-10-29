import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profileimg from '../../assets/profile_img.png'
import caretimg from '../../assets/caret_icon.svg'
import { logout } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

  const navref = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navref.current.classList.add('nav-dark')
      }
      else{
        navref.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navref} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV shows</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons"/>
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons"/>
        <div className="navbar-profile">
            <img src={profileimg} alt="" className="profile" />
            <img src={caretimg} alt="" />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>Sign Out of Netfilx</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
