import React, { useState } from 'react';
import Carousel from './Carousel'; // Assuming you have a Carousel component defined
import Foot from './footer';
import bg from '../../assets/icons/bgs.png';
import './Event.css';

const Event = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <>
      <div className='flex flex-col h-auto w-auto  items-center pt-28 gap-4 sm:gap-7 md:gap-10 bg-cover '
      style={{backgroundImage:`url(${bg})`}}>
    <div className='h-40 w-full text-9xl  text-center italic'>Events</div>
    <div className='w-11/12 h-44 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1 '>
    <div className='flex-1  bg-opacity-25  bg-pink-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-sky-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25  bg-yellow-400  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-red-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25  bg-purple-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5'onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-orange-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p>fbjkdgfjdbfd
      jkddjkfklghfudhsgf
      flkdfhsdkfhkd;
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
      </div>
    </div>
 
   
   
    </div>
 
   
    <div className='w-full h-auto mb-2 sw:mb-3 md:mb-4 lg:mb-7 xl:mb-10   text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl  pr-5 text-right'>"Privartan hi jeevan ka satya hai"</div>


   
    </div>
      <Foot />

      {isModalOpen && (
        <div className='modal show'>
          <div className='modal-content'>
            <button className='close-modal-btn' onClick={closeModal}>✕</button>
            <div className='modal-image h-52 sm:h-56 md:h-64 lg:h-72 xl:h-96'>
              <Carousel></Carousel> {/* Here's where the Carousel component is added */}
            </div>
            <div className='modal-text'>
              <h2>Modal Title</h2>
              <p>{modalContent}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;
