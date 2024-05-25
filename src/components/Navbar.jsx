
import React, { useState } from 'react';
import {  AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo1 from '../assets/icons/logo.png'
import fb from '../assets/links/fb.png'
import instagram from '../assets/links/instagram.png'
import linkden from '../assets/links/linkden.png'
import youtube from '../assets/links/youtube.png'
import menu from '../assets/links/menu.png'


const  Navbar = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showSidebar = () => {
    setSidebarOpen(true);
  };

  const hideSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='flex fixed top-0 w-full justify-center  z-50 bg-cover bg-opacity-50 bg-white backdrop-filter backdrop-blur-lg shadow-xl '>
    <img src={logo1} className=' h-[88px] '></img>
      <div className=" flex flex-col items-center top-0 w-9/12  bg-transparent">
 
    <div className='flex  flex-wrap justify-end w-full items-center gap-10  mt-2'>
     <div className='md:block hidden'><img src={fb} className='h-8 w-8 scale '></img></div>
     <div className='md:block hidden'><img src={linkden} className='h-8 w-8 scale'></img></div>
     <div className='md:block hidden'><img src={instagram} className='h-8 w-8 scale'></img></div>
     <div className='md:block hidden'><img src={youtube} className='h-8 w-8 scale'></img></div>
     <div className='showSidebar md:hidden block'>
     <li className="menu-button" onClick={showSidebar}>
       <a href="#" className="px-4 py-2 text-black">
       <img src={menu}></img>
       </a>
     </li>
     </div>
   </div>

   {/* Render the sidebar only on screens larger than the phone size */}
   <ul className="hidden md:flex w-full h-12 justify-end items-center">
     <li className="mr-auto"></li>
     <li><Link href="#" className="px-4 py-2 text-black">Home</Link></li>
     <li><Link to={'/about'} className="px-4 py-2 text-black">About</Link></li>
     <li><Link to={'/events'} className="px-4 py-2 text-black">Events</Link></li>
     <li><Link  to={'/blogs'} className="px-4 py-2 text-black">Gallery</Link></li>
     <li><Link  to={'/contact'} className="pl-4 py-2 text-black">Contact</Link></li>
   
   </ul>
   {/* Render the sidebar on phone-sized screens */}
   <ul className={sidebarOpen ? "flex flex-col h-screen w-64 bg-opacity-25 bg-white backdrop-filter backdrop-blur-lg fixed top-0 right-0 z-20 " : "hidden"}>
     <li className="w-full">
       <a href="#" className="px-4 py-2 text-black" onClick={hideSidebar}>
         <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
           <path d="M249 849l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
         </svg>
        {/* <div className='h-26  w-26  menu'></div> */}
       </a>
     </li>
     <div className='px-4 flex mb-10 gap-5'><div><img  src={fb} className='h-8 w-8 scale '></img></div>
     <div><img src={linkden} className='h-8 w-8 scale'></img></div>
     <div><img  src={instagram} className='h-8 w-8 scale'></img></div>
     <div><img src={youtube} className='h-8 w-8 scale'></img></div></div>
     <li><Link href="#" className="px-4 py-2 text-black">Home</Link></li>
     <li><Link to={'/about'} className="px-4 py-2 text-black">About</Link></li>
     <li><Link to={'/events'} className="px-4 py-2 text-black">Events</Link></li>
     <li><Link to={'/blogs'} className="px-4 py-2 text-black">Gallery</Link></li>
     <li><Link to={'/contact'} className="px-4 py-2 text-black">Contact</Link></li>
   </ul>
 </div>
    </div>
  );
}

export default Navbar;