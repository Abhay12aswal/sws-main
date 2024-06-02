import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Contact.css';
import Foot from './footer';

const Contact = () => {
  return (
    <>
      <div className='main h-full w-full my-16 xl:my-24 flex flex-col  gap-20 pt-20'>
        <div className="card self-center w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 h-[450px] sm:h-[550px]">
          <div className="background flex flex-col space-y-2 sm:space-y-2 justify-center">
            <div className=' text-white text-left pl-0 sm:pl-20 h-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 self-center sm:self-start text-6xl sm:text-6xl  lg:text-7xl mb-5'>Contact Us</div>
            <div className='hide text-white w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 self-center  text-xl sm:text-3xl  '>
              <p>Ad: House no 183, Sirmour tea estate marg, Kaulagarh road, Kishen Nagar, Dehradun, Uttarakhand - 248001</p>
              <p>Mobile No: 8954757925, 8191995014</p>
              <p className='break-words'>Email ID: samarpitmediasociety@gmail.com</p>
            </div>
            <button className='btn-pin self-center hide text-sm md:text-lg'>Follow Us</button>
          </div>
          <div className="logo">SWS</div>

          <a href="https://www.instagram.com/samarpitmedia?igsh=MW91Mm5ramMwYjZzdg==" className="box box1" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.3 0-75-33.7-75-75s33.7-75 75-75 75 33.7 75 75-33.7 75-75 75zm146.4-194.1c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-92.6s-56.9-34.5-92.6-36.2C277.4 32 194.6 32 110.6 34.3c-35.7 1.7-67.3 9.9-92.6 36.2s-34.5 56.9-36.2 92.6C-32 194.6-32 277.4 34.3 361.4c1.7 35.7 9.9 67.3 36.2 92.6s56.9 34.5 92.6 36.2c84 2.3 166.8 2.3 250.8 0 35.7-1.7 67.3-9.9 92.6-36.2s34.5-56.9 36.2-92.6c2.3-84 2.3-166.8 0-250.8zM398.8 388.3c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"></path>
              </svg>
            </span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100090550977393" className="box box2" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M9.197 21.027h3.95v-6.007h2.664l.398-3.078h-3.062v-1.962c0-.891.248-1.498 1.533-1.498l1.639-.001v-2.77c-.284-.038-1.257-.122-2.392-.122-2.368 0-3.992 1.447-3.992 4.102v2.251h-2.682v3.078h2.682v6.007z"></path>
              </svg>
            </span>
          </a>
          <a href="https://youtube.com/@sms-666?si=VftBMQwd8rpymMcn" className="box box3" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="svg">
                <path d="M549.655 124.083c-6.281-23.632-24.807-42.19-48.451-48.481-42.774-11.448-213.206-11.448-213.206-11.448s-170.432 0-213.206 11.448c-23.644 6.291-42.17 24.849-48.451 48.481C0 160.856 0 256 0 256s0 95.144 26.341 131.917c6.281 23.632 24.807 42.19 48.451 48.481 42.774 11.448 213.206 11.448 213.206 11.448s170.432 0 213.206-11.448c23.644-6.291 42.17-24.849 48.451-48.481C576 351.144 576 256 576 256s0-95.144-26.345-131.917zM231.81 338.133v-165.3l142.73 82.658-142.73 82.642z"></path>
              </svg>
            </span>
          </a>
        </div>  
      </div>
      <Foot />
    </>
  );
}

export default Contact;
