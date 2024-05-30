import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiFillCloseCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Carousel from './Carousel';
import image2 from '../../assets/gallery/img0.jpg';

import './About.css';
import Foot from './footer';
import bg from '../../assets/icons/About.png'


Modal.setAppElement('#root'); // Ensures accessibility by attaching modal to the root element

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage('');
  };

  return (
    <div className=' body1 flex mt-20 flex-col w-full  h-fit  items-center bg-contain 2xl:bg-cover  bg-repeat-y gap-10 overflow-x-hidden'
    style={{backgroundImage:`url(${bg})`}}>
      <div className='header h-20 pb-20 mt-5 w-auto bg-transparent text-6xl sm:text-7xl md:text-8xl font-serif'>
        About Us
      </div>

      <div className=' text-xl sm:text-xl md:text-2xl  lg:text-4xl w-auto italic text-violet-800'>from the Director</div>

      <div className="flex flex-col h-auto lg:flex-row w-11/12 md:flex-1 mb-20 gap-5">
        <div className='flex flex-col h-auto w-full justify-center items-center'>
          <div className='h-auto w-11/12 text-left bg-opacity-5 bg-white backdrop-filter backdrop-blur-sm rounded-xl'>
            "Protecting nature is not just a choice; it's our responsibility. Together, let's safeguard our planet for a sustainable future."
            Established in 2012, Samarpit Media Society (SMS) stands as a beacon of hope and progress in Uttarakhand, weaving a tapestry of transformative initiatives across environmental conservation, tourism promotion, and social empowerment.
            With unwavering dedication, SMS employs a symphony of creative mediums—from captivating audio-visual productions to soul-stirring musical compositions and vibrant community events—to illuminate minds and ignite change.
            WHAT WE DO (MISSION)
            Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.
            Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
          </div>
        </div>

        <div className='w-9/12 md:w-3/5 flex md:items-center justify-center self-center lg:w-3/6 '>
          <div className='h-80 w-full  md:items-center'>
            <Carousel />
          </div>
        </div>
      </div>

      <div className='h-auto w-full flex flex-col items-center second gap-5 lg:gap-20'>
       
     
      <div className="flex flex-col-reverse h-auto lg:flex-row w-11/12 md:flex-1 mb-20 gap-5">
       

        <div className='w-9/12 md:w-3/5 flex md:items-center justify-center self-center lg:w-3/6 '>
          <div className='h-64   md:items-center'>
          <img
                src={image2}
                className='h-full w-full rounded-3xl cursor-pointer'
                alt='Description'
                onClick={() => openModal(image2)}
              />
          </div>
        </div>
        <div className='flex flex-col h-auto w-full  justify-center'>
          <div className='h-auto w-auto text-left bg-opacity-5 bg-white backdrop-filter backdrop-blur-sm rounded-xl '>
          
            Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.
            Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
          </div>
        </div>
      </div>
      <div className="flex flex-col h-auto lg:flex-row w-11/12 md:flex-1 mb-20 gap-5">
       

       
       <div className='flex flex-col h-auto w-full justify-center'>
         <div className='h-auto w-auto text-left bg-opacity-5 bg-white backdrop-filter backdrop-blur-sm rounded-xl'>
         
           Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.
           Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
         </div>
       </div>

       <div className='w-9/12 md:w-3/5 flex md:items-center justify-center self-center lg:w-3/6 '>
         <div className='h-64   md:items-center'>
         <img
               src={image2}
               className='h-full w-full rounded-3xl cursor-pointer'
               alt='Description'
               onClick={() => openModal(image2)}
             />
         </div>
       </div>
     </div>
     <div className="flex flex-col-reverse h-auto lg:flex-row w-11/12 md:flex-1 mb-20 gap-5">
       

       <div className='w-9/12 md:w-3/5 flex md:items-center justify-center self-center lg:w-3/6 '>
         <div className='h-64   md:items-center'>
         <img
               src={image2}
               className='h-full w-full rounded-3xl cursor-pointer'
               alt='Description'
               onClick={() => openModal(image2)}
             />
         </div>
       </div>
       <div className='flex flex-col h-auto w-full justify-center'>
         <div className='h-auto w-auto text-left bg-opacity-5 bg-white backdrop-filter backdrop-blur-sm rounded-xl'>
         
           Mission: Samarpit Media Society (SMS) strives to foster an enlightened and responsible society by addressing social, environmental, and cultural challenges through creative initiatives, raising awareness, inspiring action, and empowering communities.
           Vision: SMS envisions a future where Uttarakhand thrives as a model of sustainable progress, achieved through inclusive development, community empowerment, and global inspiration, paving the way for a brighter tomorrow for all.
         </div>
       </div>
     </div>

        <Foot></Foot>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='Modal' overlayClassName='Overlay'>
        <button onClick={closeModal} className='close-button'>
          <AiFillCloseCircle size={40} color='white' />
        </button>
        <img src={modalImage} className='h-full w-full' alt='Full Size' />
      </Modal>



      
    </div>
   
  );
};

export default About;