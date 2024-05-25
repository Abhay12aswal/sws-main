import React from 'react'
import Crousel from './Carousel'
import Foot from './footer';

import bg from '../../assets/icons/bgs.png'

const Event = () => {
  return (<>
    <div className='flex flex-col h-auto w-auto  items-center pt-28 gap-10 bg-cover '
      style={{backgroundImage:`url(${bg})`}}>
    <div className='h-40 w-full text-9xl  text-center italic'>Events</div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1 '>
    <div className='flex-1  bg-opacity-25  bg-pink-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5 h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
     <button>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25 bg-sky-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
     </p>
     <button >know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25 bg-yellow-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      </p>
     <button>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25 bg-red-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5 h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
     </p>
     <button>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25 bg-purple-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds
      </p>
     <button>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25 bg-orange-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center '>
      <div className='w-2/5  h-4/5 self-center'>
        <Crousel></Crousel>
      </div>
      <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2'>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;headerdskflhds</p>
     <button>know-more</button>
      </div>
    </div>
 
   
   
    </div>
 
   
    <div className='w-full h-auto  bg-opacity-25 bg-green-400 text-5xl backdrop-filter backdrop-blur-lg text-center'>"Quotes likh den aekk mst wala a  kdjsh</div>


   
    </div>
    <Foot></Foot>
  </>
  )
}

export default Event