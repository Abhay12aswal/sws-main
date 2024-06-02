

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import image1 from '../../assets/gallery/yoga.jpg';
import image2 from '../../assets/gallery/yg.jpg';
import image3 from '../../assets/gallery/yg2.jpg';



const Carouselyg = () => {
  const slides = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); 

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [currentIndex]); // Run effect whenever currentIndex changes

  return (
    <div className='w-full h-full relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-50'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-400'}`}
          >
            <RxDotFilled size={10} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carouselyg;