
import React, { useState } from 'react';
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo1 from '../assets/icons/logo.png'

import fb from '../assets/links/fb.png';
import instagram from '../assets/links/instagram.png';
import linkden from '../assets/links/linkden.png';
import youtube from '../assets/links/youtube.png';
import menu from '../assets/icons/menu.png';


const  Navbar = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showSidebar = () => {
    setSidebarOpen(true);
  };

  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='flex fixed top-0 w-screen justify-center  z-50 bg-cover bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg shadow-xl '>
    <img src={logo1} className=' h-[88px] '></img>
      <div className=" flex flex-col items-center top-0 w-9/12  bg-transparent">
 
    <div className='flex  flex-wrap justify-end w-full items-center gap-10  mt-2'>
    <div className="md:block hidden"><img src={fb} className="h-8 w-8" alt="Facebook" /></div>
          <div className="md:block hidden"><img src={linkden} className="h-8 w-8" alt="LinkedIn" /></div>
          <div className="md:block hidden"><img src={instagram} className="h-8 w-8" alt="Instagram" /></div>
          <div className="md:block hidden"><img src={youtube} className="h-8 w-8" alt="YouTube" /></div>
     <div className='showSidebar md:hidden block'>
     <li onClick={showSidebar}>
       <a href="#" className="px-4 py-2 text-black">
         <img src={menu} className='h-8 w-8 mr-2 '></img>
       </a>
     </li>
     </div>
   </div>

   {/* Render the sidebar only on screens larger than the phone size */}
   <ul className="hidden md:flex w-full h-12 justify-end items-center">
     <li className="mr-auto"></li>
     <li><Link href={'/home'} className="px-4 py-2 text-black">Home</Link></li>
     <li><Link to={'/about'} className="px-4 py-2 text-black">About</Link></li>
     <li><Link to={'/events'} className="px-4 py-2 text-black">Events</Link></li>
     <li><Link  to={'/gallery'} className="px-4 py-2 text-black">Gallery</Link></li>
     <li><Link  to={'/contact'} className="pl-4 py-2 text-black">Contact</Link></li>
   
   </ul>
   {/* Render the sidebar on phone-sized screens */}
   <ul className={sidebarOpen ? "flex flex-col h-screen w-64 bg-opacity-60 bg-white backdrop-filter backdrop-blur-xl fixed top-0 right-0 z-20 gap-5" : "hidden"}>
     <li className="w-full">
       <a href="#" className="px-4 py-2 text-black" onClick={hideSidebar}>
         <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 96 960 960" width="35" className='ml-5'>
           <path d="M249 849l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
         </svg>
       </a>
     </li>
     <div className="px-4 flex mb-8 gap-5">
            <div><img src={fb} className="h-11 w-11" alt="Facebook" /></div>
            <div><img src={linkden} className="h-11 w-11" alt="LinkedIn" /></div>
            <div><img src={instagram} className="h-11 w-11" alt="Instagram" /></div>
            <div><img src={youtube} className="h-11 w-11" alt="YouTube" /></div>
          </div>
     <li><Link href={'home'} className="px-6 py-2 text-black text-2xl ">Home</Link></li>
     <li><Link to={'/about'} className="px-6 py-2 text-black text-2xl">About</Link></li>
     <li><Link to={'/events'} className="px-6 py-2 text-black text-2xl">Events</Link></li>
     <li><Link to={'/gallery'} className="px-6 py-2 text-black text-2xl">Gallery</Link></li>
     <li><Link to={'/contact'} className="px-6 py-2 text-black text-2xl">Contact</Link></li>
   </ul>
 </div>
    </div>
  );
}

export default Navbar;