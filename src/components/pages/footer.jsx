
import React from 'react'
import './footer.css'
import fb from '../../assets/links/fb.png'
import instagram from '../../assets/links/instagram.png'
import linkden from '../../assets/links/linkden.png'
import youtube from '../../assets/links/youtube.png'



const Foot = () => {
    return (

<div className='flex flex-col flex-wrap w-full h-auto items-center body '>
   <div className='bg-sky-400  flex justify-center  w-full h-auto pt-2'>
  <div className='flex items-end text text-4xl md:text-6xl italic text-white'>Samarpit Media Society</div>
   </div>
 
      <div className='flex flex-col md:flex-row items-center w-full bg-gradient-to-b from-sky-400 to-slate-50 
      h-auto gap-4 bg-cover pl-10 pr-10 pt-3'
     >
    
        <div className='relative rounded-3xl sm:w-full w-full  flex-1 flex bg-opacity-40 bg-sky-100 justify-center h-fit'>
        <div className=' h-fit flex flex-col w-auto  gap-2'>
          <div className='text-left  text-xl md:text-4xl '>Programms</div>
          <div className='relative flex flex-col gap-1 '> 
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Yoga Training</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Nanhi Muskan</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Mille saath tumhara</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Nanhi Muskan</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Mille saath tumhara</div>
          
          
          </div>
         
        </div></div>
        <div className='relative rounded-3xl sm:w-full w-full  flex-1 flex  bg-opacity-25 bg-white backdrop-filter backdrop-blur-lg justify-center h-fit'>
        <div className=' h-fit flex flex-col w-auto  gap-2'>
          <div className='text-left  text-xl md:text-4xl '>What we do</div>
          <div className='relative flex flex-col gap-1 '> 
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Social Empoverment</div>
          <div className='text-left text-sm sm:text-lg italic xl:text-xl'>Environment Conservation</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>Tourism</div>
          
          </div>
         
        </div></div>
    
        
        <div className='relative rounded-3xl  sm:w-full w-full flex-1 flex  bg-opacity-25 bg-white backdrop-filter backdrop-blur-lg justify-center  h-fit '>
        <div className=' h-fit flex flex-col w-auto gap-2'>
          <div className='text-left text-xl md:text-4xl'>Contact Us</div>
          <div className='relative flex flex-col gap-1 '> 
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>5343434545</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>djhgsjghhad@email.com</div>
          <div className='text-left text-sm sm:text-lg italic  xl:text-xl'>ganesh vihar padampur</div>
          </div>
        
        </div></div>
        
      
       
      </div>
      <div className='relative  sm:w-full w-full  flex-1 flex bg-opacity-100 bg-white backdrop-filter backdrop-blur-lg justify-center h-fit '>
        <div className=' h-fit flex flex-col w-9/12 items-center '>
          <div className='text-8xl '>S W S</div>

          <div className='flex justify-center gap-20 mt-2'>
        <div><img src={fb} className='h-12 w-12 scale'></img></div>
        <div><img src={linkden} className='h-12 w-12 scale'></img></div>
        <div><img src={instagram} className='h-12 w-12 scale'></img></div>
        <div><img src={youtube} className='h-12 w-12 scale'></img></div>
      </div>
     
          </div>
         
        </div>
</div>
 );
};

export default Foot;