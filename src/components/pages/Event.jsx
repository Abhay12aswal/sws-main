import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel'; // Assuming you have a Carousel component defined
import Foot from './footer';
import bg from '../../assets/icons/bgs.png';
import './Event.css';
import Carouselnm from '../Carousel/Craouselnm';

import Carouselms from '../Carousel/Carouselms';

import Carouselyg from '../Carousel/Carouselyg';



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
      <Carouselms></Carouselms>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Mile Sath Tumhara
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal(<p><h1 className='text-center '>Mile Sath Tumhara</h1>The event "Mile SathTumahara" held on September 30th, 2012, was a heartwarming showcase of talent and inclusivity, bringing together individuals from various marginalized groups in society. Organized by your society, the event aimed to provide a platform for disabled, differently-abled, and neglected individuals to showcase their talents in music and dance.

Participants were carefully selected from different organizations catering to marginalized groups. These included individuals from 'Nijaad' Nasha Mukti Kendra (a drug and alcohol de-addiction rehabilitation centre), girls from an orphanage residential government school in Dehradun, senior citizens from an old age home, children from Cheshire Home (dedicated to leprosy patients, mentally handicapped individuals, chronic spastic/paraplegic, and TB patients), and children from HOPES centre for autism & developmental disabilities.

Over two months, these selected participants received rigorous training in various art forms such as dance, song, drama, and even a fashion show. This training not only honed their artistic skills but also served as a form of empowerment and rehabilitation.

The culmination of their hard work and dedication came to fruition during the event held at Raj Bhavan, Uttarakhand. In the presence of the Governor, Uttarakhand Cabinet ministers, dignitaries, and the general public, these individuals showcased their talents with pride and confidence. Through their performances, they not only entertained the audience but also challenged societal stereotypes and perceptions about their capabilities.

The event served as a powerful reminder of the importance of inclusivity, empathy, and providing equal opportunities for all members of society, regardless of their background or abilities. It celebrated the inherent talents and resilience of individuals who are often marginalized and overlooked, leaving a lasting impact on all those who attended.

</p>)}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-sky-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
       <Carouselnm></Carouselnm>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Nanhi Muskaan 
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal(<p><h1 className='text-center '>Nanhi Muskaan </h1>The program organized for physically and mentally disabled children from 13 districts of Uttarakhand sounds both heartwarming and impactful. Providing them with a platform aimed to integrate these often-neglected children into the broader societal fabric.

Beginning with a visit to an ashram in Haridwar, the children were allowed to participate in the Holy Ganga Aarti, a deeply spiritual and culturally significant experience. This likely provided them not only with a sense of belonging but also a chance to engage with their spirituality in a meaningful way.

The following day, the children were taken to the Chief Minister's residence, a significant honour and opportunity for them to showcase their talents. Through dance and song performances, they demonstrated their artistic abilities in front of the Chief Minister and other government officials. This exposure not only allowed them to express themselves creatively but also highlighted their capabilities to decision-makers, potentially leading to greater support and recognition for their needs.

Overall, the program served as a beacon of inclusivity and empowerment, striving to bring marginalized children into the mainstream and fostering a more inclusive society in Uttarakhand. It's heartening to see initiatives like this that prioritize the well-being and inclusion of all members of society, regardless of ability.
</p>)}>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25  bg-purple-600 backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Kids Fashion Show 
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal(<p><h1 className='text-center '>Prince and Princess Doon - Kids Fashion Show </h1>The fashion show event for children under 15 years in the Dehradun district was a meticulously planned affair, aimed at nurturing young talent and introducing them to the world of fashion. To ensure the participants were well-prepared, they underwent a comprehensive four-month professional training program. During this period, they were mentored by top-rated instructors from Dehradun, providing them with invaluable insights into the fashion industry.

Throughout the training sessions, participants delved into various aspects of fashion, learning about everything from runway etiquette to styling techniques. They were guided on how to address major concerns and advised to propel their budding modelling careers forward. The training not only equipped them with practical skills but also instilled confidence in their abilities.

The culmination of this training was a grand fashion show competition held at a prestigious 4-star hotel in Dehradun. Here, the young talents had the opportunity to showcase their newfound skills and flair on the runway. The event was not just a platform for display but also a celebration of their hard work and dedication.

After the fashion show, certificates of participation and prizes were awarded to the winners, acknowledging their talent and effort. This recognition served as encouragement for the children to continue pursuing their passion for fashion with zeal and determination. Overall, the event was a testament to the potential of young talents and the importance of nurturing them in the right direction.

</p>)}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-orange-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Nanhi Chirriya 
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal(<p><h1 className='text-center '>Nanhi Chirriya</h1>"NanhiChirriya" stands as a testament to resilience and determination in the face of gender inequalities. In a landscape where such disparities persist, it emerged as a powerful symbol of hope, dedicated to championing the rights and empowerment of girls. Through its concerted efforts to raise awareness and combat discrimination, the event became a catalyst for transformative societal change.

Aligned with government initiatives like "Save the Girl Child," "NanhiChirriya" played a pivotal role in reshaping attitudes and policies towards gender equality. It served as a rallying point for advocates, policymakers, and communities alike, fostering a collective commitment to ensuring that every girl is cherished and provided with equal opportunities.

The impact of "NanhiChirriya" reverberated far beyond its initial inception, sparking conversations, inspiring action, and laying the groundwork for a more inclusive and equitable future. By amplifying the voices of girls and advocating for their rights, it illuminated a path towards a society where every individual, regardless of gender, can thrive and fulfil their potential.
**PR Activities for Hindi Feature Film "The Silent Heroes" - Aug to Dec 2015**
Harnessing the power of storytelling, Samarpit Media Society spearheaded a groundbreaking PR campaign for "The Silent Heroes", a poignant portrayal of deaf children navigating the rugged terrains of Uttarakhand. Leveraging digital and social media platforms, the society ensured that the film garnered widespread acclaim, shedding light on the resilience and indomitable spirit of its protagonists.

</p>)}>know-more</button>
      </div>
    </div>
 
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25  bg-yellow-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
       <Carouselyg></Carouselyg>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Yoga Training 
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5'onClick={() => openModal(<p><h1 className='text-center '>Yoga Training </h1>(ToMax Hospital Doctors and Nurses - 19th Feb 2014)
The week-long Yoga Training Programme organized by Samarpit Media Society at Max Super Speciality Hospital was a commendable endeavour aimed at nurturing holistic well-being among healthcare professionals. By seamlessly integrating theory with practical sessions, the initiative empowered doctors and nurses with invaluable tools to bolster their physical and mental resilience.

Through a meticulously crafted curriculum, participants delved into the profound principles and practices of yoga, gaining insights into its profound impact on both body and mind. From mastering various asanas to understanding the nuances of breathwork and meditation, attendees were equipped with a comprehensive toolkit for fostering their well-being.

Beyond the physical benefits, the programme underscored the significance of self-care in the demanding field of healthcare. By nurturing a culture of self-awareness and compassion, healthcare professionals were encouraged to prioritize their wellness, recognizing that only by attending to their own needs could they effectively care for others.

Moreover, the initiative highlighted the pivotal role of yoga in promoting overall wellness, offering a holistic approach to health that transcends mere physical fitness. By embracing yoga as a transformative practice, participants were empowered to cultivate balance, resilience, and inner peace amidst the rigours of their profession.

In essence, the Yoga Training Programme not only catalyzed personal growth and self-care but also fostered a deeper appreciation for the profound benefits of yoga in promoting holistic well-being among healthcare professionals.

</p>)}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-red-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Self Defence Training 
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal(<p><h1 className='text-center '>Self Defence Training</h1>The scene at Max Hospital Dehradun on International Women’s Day was one of empowerment and transformation as a self-defence training program took centre stage. Doctors and nurses gathered, eager to arm themselves with essential safety techniques, not just for their profession, but for their personal lives as well. The atmosphere buzzed with determination and solidarity as participants fortified themselves against potential threats, symbolizing strength and resilience in the face of adversity.

Beyond simply learning physical self-defence manoeuvres, the initiative catalyzed fostering a culture of self-confidence among the participants. It wasn't just about mastering techniques; it was about instilling the belief that they could protect themselves and navigate challenges with poise. 

This empowerment wasn't confined to the physical realm; it permeated through the corridors of the hospital, influencing attitudes and mindsets. The participants emerged not only physically stronger but also mentally fortified, ready to tackle any obstacle that came their way. The program stood as a testament to the power of education and preparation in empowering individuals, especially women, to take control of their safety and well-being.
</p>)}>know-more</button>
      </div>
    </div>
 
   
   
    </div>
    <div className='w-11/12 h-48 sm:h-48  md:h-52 lg:h-60 xl:h-72  flex gap-2 sm:gap-7 md:gap-10 xl:gap-28 px-1'>
    <div className='flex-1  bg-opacity-25  bg-cyan-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">HomeLens
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5'onClick={() => openModal(<p><h1 className='text-center '>HomeLens</h1>The collaboration between Samarpit Media Society and the Tourism Department in the Dehradun district aimed to invigorate rural tourism while empowering local communities. Through this partnership, they focused on enhancing homestay initiatives, recognizing them as a pivotal aspect of rural tourism development.

By actively engaging with homestay owners, the project sought to showcase the distinctive allure of rural life to tourists. This approach not only provided visitors with authentic experiences but also fostered a deeper connection between tourists and the local community. 

Moreover, by promoting homestays, the initiative contributed to the socioeconomic development of rural areas. Residents were able to generate sustainable livelihoods through hosting tourists, thus bolstering the economic resilience of these communities.

Overall, the collaboration between Samarpit Media Society and the Tourism Department not only enriched tourist experiences but also facilitated the socio-economic empowerment of rural communities in the Dehradun district.

</p>)}>know-more</button>
      </div>
    </div>
    <div className='flex-1  bg-opacity-25  bg-green-600  backdrop-filter backdrop-blur-lg h-full rounded-2xl flex justify-center px-2 sm:px-6 md:px-8 xl:px-10'>
      <div className='w-2/4 h-3/4 sm:h-4/5 self-center'>
        <Carousel></Carousel>
      </div>
      <div className='w-2/4 bg-transparent h-4/5 self-center text-center text-[10px] sm:text-sm md:text-sm lg:text-base xl:text-xl flex flex-col  justify-center gap-2 '>
      <p className="text-sm sm:text-base md:text-2xl lg:text-3xl">Heritage Tour Guide Training 
    </p>
    <button className='btn self-center p-1 sm:p-1.5 lg:p-2.5 ' onClick={() => openModal(<p><h1 className='text-center '>Heritage Tour Guide Training </h1>Samarpit Media's Tourism Department organized a ten-day "Heritage and Tour Guide Training" program across 14 locations in Uttarakhand: Kotdwar, Roorkee, Devprayag, Harshil, Ghansali, Mori,Chakrata, hanol, Lansdowne, Pauri, Karanprayag, Joshimath, Budhakedar, . The primary objective of this training initiative is to provide professional instruction to eligible candidates, equipping them with the necessary skills and knowledge to excel as Heritage Tour Guides or Tour Guides within the Travel and Tourism sector. Through this comprehensive program, participants are empowered to take up roles in the industry with confidence, armed with the expertise and competence required for success in their chosen field.
</p>)}>know-more</button>
      </div>
    </div>
 
   
   
    </div>
   
    <div className='w-full h-auto mb-2 sw:mb-3 md:mb-4 lg:mb-7 xl:mb-10   text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl  pr-5 text-center'>"Privartan hi jeevan ka satya hai"</div>


   
    </div>
      <Foot />

      {isModalOpen && (
        <div className='modal show'>
          <div className='modal-content'>
            <button className='close-modal-btn' onClick={closeModal}>✕</button>
            <div className='modal-image h-52 sm:h-56 md:h-64 lg:h-72 xl:h-96'>
              <Carousel></Carousel>
            </div>
            <div className='modal-text'>
              
              <p>{modalContent}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Event;