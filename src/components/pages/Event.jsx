import React, { useState } from 'react';
import Crousel from './Carousel';
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
      <div className='flex flex-col h-auto w-auto items-center pt-28 gap-10 bg-cover' style={{ backgroundImage: `url(${bg})` }}>
        <div className='h-40 w-full text-9xl text-center italic'>Events</div>
        <div className='w-11/12 h-48 sm:h-48 md:h-52 lg:h-60 xl:h-72 flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
          <div className='flex-1 bg-opacity-25 bg-pink-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center'>
            <div className='w-2/5 h-4/5 self-center'>
              <Crousel />
            </div>
            <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col justify-center gap-2'>
              <p>Event 1 fbjkdgfjdbfdjkddjkfklghfudhsgf flkdfhsdkfhkd;headerdskflhds </p>
              <button className='button' onClick={() => openModal('Event 1 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
            </div>
          </div>
          <div className='flex-1 bg-opacity-25 bg-sky-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center'>
            <div className='w-2/5 h-4/5 self-center'>
              <Crousel />
            </div>
            <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col justify-center gap-2'>
              <p>Event 2 fbjkdgfjdbfdjkddjkfklghfudhsgf flkdfhsdkfhkd;headerdskflhds</p>
              <button className='button' onClick={() => openModal('Event 2 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
            </div>
          </div>
        </div>
        <div className='w-11/12 h-48 sm:h-48 md:h-52 lg:h-60 xl:h-72 flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
          <div className='flex-1 bg-opacity-25 bg-yellow-400 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center'>
            <div className='w-2/5 h-4/5 self-center'>
              <Crousel />
            </div>
            <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col justify-center gap-2'>
              <p>Event 3 fbjkdgfjdbfdjkddjkfklghfudhsgf flkdfhsdkfhkd;headerdskflhds</p>
              <button className='button' onClick={() => openModal('Event 3 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
            </div>
          </div>
          <div className='flex-1 bg-opacity-25 bg-red-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center'>
            <div className='w-2/5 h-4/5 self-center'>
              <Crousel />
            </div>
            <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col justify-center gap-2'>
              <p>Event 4 fbjkdgfjdbfdjkddjkfklghfudhsgf flkdfhsdkfhkd;headerdskflhds</p>
              <button className='button' onClick={() => openModal('Event 4 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
            </div>
          </div>
        </div>
        <div className='w-11/12 h-48 sm:h-48 md:h-52 lg:h-60 xl:h-72 flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
          <div className='flex-1 bg-opacity-25 bg-purple-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center'>
            <div className='w-2/5 h-4/5 self-center'>
              <Crousel />
            </div>
            <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col justify-center gap-2'>
              <p>Event 5 fbjkdgfjdbfdjkddjkfklghfudhsgf flkdfhsdkfhkd;headerdskflhds.</p>
              <button className='button' onClick={() => openModal('Event 5 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
            </div>
          </div>
          <div className='flex-1 bg-opacity-25 bg-orange-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center'>
            <div className='w-2/5 h-4/5 self-center'>
              <Crousel />
            </div>
            <div className='w-2/5 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col justify-center gap-2'>
              <p>Event 6 fbjkdgfjdbfdjkddjkfklghfudhsgf flkdfhsdkfhkd;headerdskflhds</p>
              <button className='button' onClick={() => openModal('Event 6 Sure, here is a randomly generated text of 100 words Once upon a time in a small village nestled between rolling hills and verdant forests, there was a curious child named Luna. She loved exploring the hidden corners of her world, from the sparkling river that twisted through the valley to the ancient oak tree that stood like a guardian at the edge of the forest. One day, Luna discovered a hidden path covered in moss and flowers. As she followed it, she found a secret garden filled with vibrant blooms and fluttering butterflies. In the center was a crystal-clear pond, reflecting the sky. Luna felt like she had discovered a magical place that belonged to her alone.')}>know-more</button>
            </div>
          </div>
        </div>
        <div className='w-full h-auto bg-opacity-25 bg-green-400 text-5xl backdrop-filter backdrop-blur-lg text-center'>
          "Quotes likh den aekk mst wala a kdjsh"
        </div>
      </div>
      <Foot />

      {isModalOpen && (
        <div className='modal show'>
          <div className='modal-content'>
            <button className='close-modal-btn' onClick={closeModal}>✕</button>
            <img src='https://via.placeholder.com/800x400' alt='Placeholder Image' className='modal-image' />
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




