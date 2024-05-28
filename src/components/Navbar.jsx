import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/icons/logo.png';

import fb from '../assets/links/fb.png';
import instagram from '../assets/links/instagram.png';
import linkden from '../assets/links/linkden.png';
import youtube from '../assets/links/youtube.png';
import menu from '../assets/icons/menu.png';
import './navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='flex fixed top-0 w-screen justify-center z-50 bg-cover bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg shadow-xl'>
      <img src={logo1} className='h-[88px]' alt="logo" />
      <div className="flex flex-col items-center top-0 w-9/12 bg-transparent">
        <div className='flex flex-wrap justify-end w-full items-center gap-10 mt-2'>
          <div className="md:block hidden">
            <a href='https://www.facebook.com/profile.php?id=100090550977393' target='_blank' rel='noopener noreferrer'>
              <img src={fb} className='h-8 w-8' alt='Facebook' />
            </a>
          </div>
          <div className="md:block hidden">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkden} className="h-8 w-8" alt="LinkedIn" />
            </a>
          </div>
          <div className="md:block hidden">
            <a href="https://www.instagram.com/samarpitmedia?igsh=MW91Mm5ramMwYjZzdg==" target="_blank" rel="noopener noreferrer">
              <img src={instagram} className="h-8 w-8" alt="Instagram" />
            </a>
          </div>
          <div className="md:block hidden">
            <a href="https://youtube.com/@sms-666?si=VftBMQwd8rpymMcn" target="_blank" rel="noopener noreferrer">
              <img src={youtube} className="h-8 w-8" alt="YouTube" />
            </a>
          </div>
          <div className='showSidebar md:hidden block'>
            <li onClick={toggleSidebar}>
              <a href="#" className="px-4 py-2 text-black">
                <img src={menu} className='h-8 w-8 mr-2' alt="menu" />
              </a>
            </li>
          </div>
        </div>

        <ul className="hidden md:flex w-full h-12 justify-end items-center">
          <li className="mr-auto"></li>
          <li><Link to={'/home'} className="nav-link px-4 py-2" onClick={hideSidebar}>Home</Link></li>
          <li><Link to={'/about'} className="nav-link px-4 py-2" onClick={hideSidebar}>About</Link></li>
          <li><Link to={'/events'} className="nav-link px-4 py-2" onClick={hideSidebar}>Events</Link></li>
          <li><Link to={'/gallery'} className="nav-link px-4 py-2" onClick={hideSidebar}>Gallery</Link></li>
          <li><Link to={'/contact'} className="nav-link px-4 py-2" onClick={hideSidebar}>Contact</Link></li>
        </ul>

        <ul className={sidebarOpen ? "flex flex-col h-screen w-64 bg-opacity-60 bg-white backdrop-filter backdrop-blur-xl fixed top-0 right-0 z-20 gap-5" : "hidden"}>
          <li className="w-full">
            <a href="#" className="px-4 py-2 text-black" onClick={hideSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 96 960 960" width="35" className='ml-5'>
                <path d="M249 849l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
              </svg>
            </a>
          </li>
          <div className="px-4 flex mb-8 gap-5">
            <div>
              <a href="https://www.facebook.com/profile.php?id=100090550977393" target="_blank" rel="noopener noreferrer">
                <img src={fb} className="h-11 w-11" alt="Facebook" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={linkden} className="h-11 w-11" alt="LinkedIn" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/samarpitmedia?igsh=MW91Mm5ramMwYjZzdg==" target="_blank" rel="noopener noreferrer">
                <img src={instagram} className="h-11 w-11" alt="Instagram" />
              </a>
            </div>
            <div>
              <a href="https://youtube.com/@sms-666?si=VftBMQwd8rpymMcn" target="_blank" rel="noopener noreferrer">
                <img src={youtube} className="h-11 w-11" alt="YouTube" />
              </a>
            </div>
          </div>
          <li><Link to={'/home'} className="nav-link px-6 py-2 text-black text-2xl" onClick={hideSidebar}>Home</Link></li>
          <li><Link to={'/about'} className="nav-link px-6 py-2 text-black text-2xl" onClick={hideSidebar}>About</Link></li>
          <li><Link to={'/events'} className="nav-link px-6 py-2 text-black text-2xl" onClick={hideSidebar}>Events</Link></li>
          <li><Link to={'/gallery'} className="nav-link px-6 py-2 text-black text-2xl" onClick={hideSidebar}>Gallery</Link></li>
          <li><Link to={'/contact'} className="nav-link px-6 py-2 text-black text-2xl" onClick={hideSidebar}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
