import React from 'react'
import Foot from './footer';
import cw from '../../assets/icons/contact.png'
const Contact = () => {
  return (
    <>
    <div className='main h-auto w-full mt-20  bg-blue-400 flex flex-col bg-center bg-cover gap-20'
     style={{backgroundImage:`url(${cw})`}}>
     <div className='map w-11/12 h-96 mt-20 bg-yellow-400 rounded-xl self-center'></div>
     <div className='h-auto w-11/12 sm:w-9/12 md:w-3/5 lg:w-8/12 xl:w-7/12 bg-opacity-10 bg-white backdrop-filter backdrop-blur-sm shadow-inner shadow-white rounded-xl  flex flex-col mb-24 border-4 border-white
     border-solid gap-10 pb-10 self-center'>
    <div className='w-auto h-auto  text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  pl-10  pt-2 '>Contact Us</div>
    <div className='text-3xl italic  w-8/12  h-auto  flex
    flex-col justify-center text-center self-center'>
    <p className=' text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic mb-2 sm:mb-4 md:mb-7 lg:mb-10'>Samarpit Media Society</p>
    <p className='text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>101 Ganesh Vihar padampur</p>
    <p className='text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>Garhwali tanki </p>
    <p className='text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>Kotdwara ,Uttarakhand</p>
    <p className='text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>Ph no.93837397937</p>
    <p className='text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl'>E-mail:fghjgsfghsfhgsfghf</p>
    
</div>
    
 
      


     
     </div>
    
     
    </div>
    <Foot></Foot>
    </>
  )
}

export default Contact