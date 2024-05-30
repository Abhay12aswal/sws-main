import React from 'react'
import './home.css'
import Carousel from './Carousel.jsx'
import Blue from '../../assets/icons/bluebubble.png'
import pink from '../../assets/icons/pinkbubble.png'
import green from '../../assets/icons/greenbubble.png'
import red from '../../assets/icons/redbubble.png'
import orange from '../../assets/icons/orangebubble.png'
import blog from '../../assets/icons/blob3.jpeg'
import blob from '../../assets/icons/blob.jpeg'
import wave from '../../assets/icons/slide.png'
import wave2 from '../../assets/icons/slide2.png'

import social from '../../assets/icons/empower.png'
import envi from '../../assets/icons/environment.png'
import tour from '../../assets/icons/tour-guide.png'
import yoga from '../../assets/gallery/yoga.jpg'
import saath from '../../assets/gallery/milesaath.jpg'
import nanhi from '../../assets/gallery/nanhimuskan.jpg'
import img0 from '../../assets/gallery/img0.jpg'
import img1 from '../../assets/gallery/img1.jpg'
import img2 from '../../assets/gallery/img2.jpg'
import img3 from '../../assets/gallery/img3.jpg'
import img4 from '../../assets/gallery/img4.jpg'
import img5 from '../../assets/gallery/img5.jpg'
import img6 from '../../assets/gallery/img6.jpg'
import img7 from '../../assets/gallery/img7.jpg'
import img8 from '../../assets/gallery/img8.jpg'
import img9 from '../../assets/gallery/img9.jpg'
import img10 from '../../assets/gallery/img10.jpg'
import img11 from '../../assets/gallery/img11.jpg'
import Foot from './footer'

import { Link } from 'react-router-dom';




const Home = () => {
  return (

      <div className='Container  flex flex-col w-screen items-center mt-28 overflow-x-hidden'>
      <div className='relative flex justify-center w-10/12 h-96 md:h-[40rem]'>
          <div className='crousel relative flex w-full  rounded-xl items-center bg-cover'>
            <Carousel />
            <div className='homedata ml-20 w-5/12 sm:w-3/12 '>
              <div className='heading italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide font-serif w-full text-white'>
                Empowering<br />
                Communities<br />
                Together
              </div>
              <div className='w-full italic text- text-white'>
                We are dedicated to making a difference in the lives of people through our various initiatives.
              </div>
              <Link to={'/about'} className='btn-pin'>Learn More</Link>
            </div>
          </div>
        </div>



            {/* <=======About us======> */}
        


      <div className='second flex  justify-center w-full h-full mt-20 bg-cover'
       style={{backgroundImage:`url(${blog})`,backgroundPosition:`center`}}>
    
      
          <div className=' h-auto flex flex-col justify-between w-full rounded-xl  bg-transparent '>
               <div className='h-20 w-auto bg-transparent text-6xl lg:pl-32 sm:text-7xl sm:pl-16 md:pl-24 md:text-8xl font-serif '>
               About Us
              </div>
              <div className='h-full mt-10 flex bg-transparent'>
              
               <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/*pt-12  pl-28*/}
                <div className='w-11/12 sm:w-4/5 h-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                <p className='italic  text-sky-700'>"Protecting nature is not just a choice; it's our responsibility. Together, let's safeguard our planet for a sustainable future."</p><br></br>
                <p>
                Samarpit Media Society (SMS) stands as a beacon of hope and progress in Uttarakhand, weaving a tapestry of transformative initiatives across environmental conservation, tourism promotion, and social empowerment.</p>
                </div>
                </div>
                <div className='relative  bg-transparent bottom-0 flex h-full w-full justify-evenly blur-[1.5px]'>
                  <div className=' w-24 rounded-full animate-bounce-fast'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce-slow'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-24 rounded-full animate-bounce-slow'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce-medium'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
              

               </div> 
                </div>
                <div className='bg-transparent relative w-4/5 sm:w-6/12  flex h-full justify-center flex-col  items-center'>
                   <div className='bg-transparent relative h-4/6 sm:h-3/4 xl:h-full w-4/5 '>
                    <img src={img4} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className='slide-left  w-full text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-rose-800  text-center italic pt-5'>~ Transforming lives daily</div>
               
                </div>
              </div>


              <div className=' h-full mt-5 flex bg-transparent'>
              <div className='bg-transparent relative  w-4/5 sm:w-6/12  flex flex-col h-full justify-center items-center'>
                   <div className='bg-transparent relative h-4/6 sm:h-3/4  xl:h-full w-4/5 '>
                    <img src={img10} className=' w-full h-full rounded-3xl '></img>
                   </div>
                   <div className='slide-right w-full text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-rose-800 italic text-center pt-5'>~ Together for change</div>
                </div>
                <div className='w-6/12 flex flex-col justify-between relative  bg-transparent'>
                
                <div className='bg-transparent flex justify-center h-full relative w-full text-left  z-10'>{/*pt-12  pl-28*/}
                <div className='w-11/12 sm:w-4/5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                <p className='italic text-sky-700'>“The meaning of life is to find your gift. The purpose of life is to give it away.”</p><br></br>
                <p>With unwavering dedication, SMS employs a symphony of creative mediums—from captivating audio-visual productions to soul-stirring musical compositions and vibrant community events—to illuminate minds and ignite change.</p></div>
                </div>
                <div className='relative bg-transparent bottom-0 flex h-full w-full justify-evenly blur-[1.5px]'>
                <div className=' w-24  rounded-full animate-bounce-fast'>
                   <img src={Blue} className='rounded-full w-full '></img>
                  </div>
                  <div className=' w-24 rounded-full animate-bounce-slow'>
                  <img src={pink} className='rounded-full w-full '></img>
                   </div>
                   <div className=' w-24 rounded-full animate-bounce'>
                    <img src={green} className='rounded-full w-full '></img>
                  </div>
                   <div className=' w-24 rounded-full animate-bounce-slow'>
                  <img src={red} className='rounded-full w-full '></img>
                   </div>
                  <div className=' w-24 rounded-full animate-bounce-medium'>
                  <img src={orange} className='rounded-full w-full '></img>
                  </div>
               </div> 
                </div>
                
              </div>
          </div>
      </div>
<div className='text1 flex flex-col gap-5 w-full'>
     <div className='text1 flex justify-center w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 bg-top bg-cover'
      style={{backgroundImage:`url(${wave})`}}>
    <div className='slide-bottom relative w-full text-center text-xl self-end bg-transparent'>
         <p className='italic font-medium text-violet-900'>“It is not how much we give, but how much love is put in the giving.”<br></br>
~Mother Teresa
</p>
    </div>
     </div>
     <div className='flex flex-col w-11/12 h-auto self-center  pb-14 '>
      <div className='self-end h-20 bg-transparentw-auto  text-6xl sm:text-7xl md:text-8xl font-serif'>
        What we do
      </div>
      <div className='w-full  h-auto  mt-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl  text-right'>
                 
        
        <p>Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.</p><br></br>
     <p>Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
</p>
      </div>
      <div className='flex flex-col md:flex-row w-auto h-auto md:gap-x-5 xl:gap-x-24 md:justify-center items-center gap-y-7   mt-10 '>

        <div className='bg-green-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max boxes1'>
        <div className='blockglow1 flex  h-60 md:h-80 md:w-auto w-64 flex-col items-center'>
        <div className='h-3/4 sm:h-4/5 pt-8'>
          <img src={envi}className='h-full'></img>
          </div>
          <div className='text-center  text-white text-xl  xl:text-2xl 2xl:text-3xl'>Environment Conservation</div>
        </div>
        </div>
        
        <div className='bg-orange-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max boxes1'>
        <div className='blockglow1 flex    h-60 md:h-80 md:w-auto w-64 flex-col items-center'>
        <div className='h-3/4 sm:h-4/5 pt-8'>
          <img src={social}className='h-full '></img>
          </div>
          <div className='text-center  text-white text-xl  xl:text-2xl 2xl:text-3xl'>Social Empowerment</div>
        </div>
        </div>
        <div className='bg-blue-500 relative rounded-3xl flex-1 md:w-auto w-64 md:h-max  boxes1'>
        <div className='blockglow1 flex   h-60 md:h-80 md:w-auto w-64 flex-col items-center'>
        <div className='h-3/4 sm:h-4/5 pt-8'>
        <img src={tour}className='h-full'></img>
          </div>
          <div className='text-center  text-white text-xl  xl:text-2xl 2xl:text-3xl '>Tourism</div>
        </div>
        </div>
       
      </div>
     </div>
</div>


{/* // <///////////////////////////////////////////////////////> */}
 {/* <div className='flex flex-col w-full h-auto mt-20 pb-10 px-40 bg-cover gap-5 '
       style={{backgroundImage:`url(${blob})`,backgroundPosition:`center`}}> */}
    <div className='flex flex-col w-full h-auto sm:mt-5 pb-10 sm:px-32 md:justify-center justify-center bg-cover gap-10 '
       style={{backgroundImage:`url(${blob})`,backgroundPosition:`left`}}>
      <div className='self-center md:self-start h-20 bg-transparentw-auto  text-6xl sm:text-7xl md:text-8xl font-serif'>
        Programms
      </div>





      <div className='w-4/5 sm:w-full self-center flex justify-center'>
      <div className="card bg-yellow-200 flex rounded-xl flex-col md:flex-row w-96  md:w-auto  md:flex-1  md:ml-0  md:ml-0  lg:ml-1 xl:ml-14 md:mr-4  lg:mr-52 xl:mr-96
      ">
        <div className='h-auto w-full md:w-1/3 flex justify-center'>
          <img src={nanhi} className='h-full rounded-xl w-full ' alt="Program 2"></img>
        </div>
        <div className='flex flex-col  md:text-center  md:h-40 px-6 sm:px-3 md:px-0 w-full'>
        <div className='md:pb-6
          h-full w-full flex  flex-wrap sw:overflow-y-scroll overflow-x-hidden gap-2'>
            <p className='text-xl text-center  w-full'>Nanhi Muskaan - 3rd Dec 2012</p> 
    
           <p className=' text-xs sm:text-sm md:text-base text-center '>
           The program organized for physically and mentally disabled children from 13 districts of Uttarakhand sounds both heartwarming and impactful. Providing them with a platform aimed to integrate these often-neglected children into the broader societal fabric.
Beginning with a visit to an ashram in Haridwar, the children participate in the Holy Ganga Aarti, a deeply spiritual and culturally significant experience. This likely provided them not only with a sense of belonging but also a chance to engage with their spirituality in a meaningful way.
</p>
          </div>
          <Link to={'/events'} className='btn-pin3 self-end mt-1.5'>Know More</Link>
        </div>
      </div>
      </div>


      <div className='w-4/5 sm:w-full self-center  flex justify-center'>
      <div className="card bg-yellow-100 flex rounded-xl flex-col md:flex-row w-96  md:w-auto  md:flex-1 md:ml-0  lg:ml-16 xl:ml-52 md:mr-4  
      lg:mr-24 xl:mr-52
      ">
        <div className='h-auto w-full md:w-1/3 flex justify-center'>
          <img src={saath} className='h-full w-full rounded-xl' alt="Program 2"></img>
        </div>
        <div className='flex flex-col  md:text-center  md:h-40 px-6 sm:px-3 md:px-0 w-full'>
        <div className='md:pb-6
          h-full w-full flex  flex-wrap sw:overflow-y-scroll overflow-x-hidden gap-2 '>
            <p className='text-xl text-center  w-full'>MILE SATH TUMAHARA -  30th Sep 2012</p> 
          
           <p className=' text-xs sm:text-sm md:text-base text-center '>
           The event "Mile Sath Tumahara" was a heartwarming showcase of talent and inclusivity, bringing together individuals from various marginalized groups in society. Organized by your society, the event aimed to provide a platform for disabled, differently-abled, and neglected individuals to showcase their talents in music and dance.
Over two months, these selected participants received rigorous training in various art forms such as dance, song, drama, and even a fashion show. This training not only honed their artistic skills but also served as a form of empowerment and rehabilitation.
</p>

          </div>
          <Link to={'/events'} className='btn-pin3 self-end mt-1.5'>Know More</Link>
        </div>
      </div>
      </div>


      <div className='w-4/5 sm:w-full self-center  flex justify-center'>
      <div className="card bg-yellow-100 flex rounded-xl  flex-col md:flex-row w-96  md:w-auto  md:flex-1  md:ml-0  lg:ml-52 xl:ml-96
      ">
        <div className='h-auto w-full md:w-1/3 flex justify-center'>
          <img src={yoga} className='h-full w-full rounded-xl' alt="Program 2"></img>
        </div>
        <div className='flex flex-col  md:text-center  md:h-40 px-6 sm:px-3 md:px-0 w-full'>
        <div className='md:pb-6
          h-full w-full flex  flex-wrap sw:overflow-y-scroll overflow-x-hidden gap-2'>
            <p className='text-xl text-center  w-full'>Yoga Training Camp - 19th Feb 201</p> 
       
           <p className=' text-xs sm:text-sm md:text-base text-center '>
           The week-long Yoga Training Programme organized by Samarpit Media Society at Max Super Speciality Hospital was a commendable endeavour aimed at nurturing holistic well-being among healthcare professionals. By seamlessly integrating theory with practical sessions, the initiative empowered doctors and nurses with invaluable tools to bolster their physical and mental resilience.
</p>

          </div>
          <Link to={'/events'} className='btn-pin3 self-end mt-1.5'>Know More</Link>
        </div>
      </div>
      </div>


    </div>   
  

  <div className='flex flex-col justify-center w-full  pt-20 pb-40 px-2 gap-5 bg-cover z-10'
        style={{backgroundImage:`url(${wave2})`,backgroundPosition:`center`}}>
       <div className='h-20 w-auto text-6xl sm:text-7xl md:text-8xl font-serif self-center sm:self-start pl-24 '>Gallery</div>
       <div className='flex w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-52 justify-between gap-2 md:gap-4 sm:px-4 md:px-4 sm:mt-10 lg:px-10 xl:px-16 '>

       <div className=' bg-white relative  h-auto w-20 flex-1 boxes'>
       <div className='blockglow h-full '>
        <img src={img11}className='w-full h-full '></img>
       </div>
      </div>
      <div className=' bg-white relative h-auto w-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={img10}className='w-full h-full  '></img>
       </div>
      </div>
      <div className=' bg-white relative  h-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={img9}className='w-full h-full  '></img>
       </div>
      </div>
      <div className=' bg-white relative  h-auto flex-1 boxes'>
       <div className='blockglow h-full'>
        <img src={img8}className='w-full h-full '></img>
       </div>
      </div>
    
     </div>



     <div className='flex w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-52 justify-between gap-2 md:gap-4 sm:px-4 md:px-4 lg:px-10 xl:px-16'>

<div className=' bg-white relative h-auto w-20 flex-1 boxes'>
<div className='blockglow h-full '>
 <img src={img7}className='w-full h-full  '></img>
</div>
</div>
<div className=' bg-white relative  h-auto w-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img6}className='w-full h-full  '></img>
</div>
</div>
<div className=' bg-white relative  h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img5}className='w-full h-full  '></img>
</div>
</div>
<div className=' bg-white relative  h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img4}className='w-full h-full  '></img>
</div>
</div>

</div>
  <div className='flex w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-52 justify-between  gap-2 md:gap-4  sm:px-4 md:px-4 lg:px-10 xl:px-16'>

<div className=' bg-white relative h-auto w-20 flex-1 boxes'>
<div className='blockglow h-full '>
 <img src={img3}className='w-full h-full '></img>
</div>
</div>
<div className=' bg-white relative  h-auto w-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img2}className='w-full h-full '></img>
</div>
</div>
<div className=' bg-white relative  h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img1}className='w-full h-full '></img>
</div>
</div>
<div className=' bg-white relative h-auto flex-1 boxes'>
<div className='blockglow h-full'>
 <img src={img0}className='w-full h-full  '></img>
</div>
</div>

</div>

</div>  


  <Foot></Foot>
</div>

    
   
  )
}

export default Home