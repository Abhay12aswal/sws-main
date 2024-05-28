// import React from 'react';
// import LightGallery from 'lightgallery/react';
// import './Gallery.css';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import 'lightgallery/css/lg-autoplay.css';
// import 'lightgallery/css/lg-fullscreen.css';
// import 'lightgallery/css/lg-share.css';
// import 'lightgallery/css/lg-rotate.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgAutoplay from 'lightgallery/plugins/autoplay';
// import lgFullscreen from 'lightgallery/plugins/fullscreen';
// import lgShare from 'lightgallery/plugins/share';
// import lgRotate from 'lightgallery/plugins/rotate';
// import img1 from '../../assets/maingallery/1.jpg';
// import img2 from '../../assets/maingallery/2.jpg';
// import img3 from '../../assets/maingallery/3.jpg';
// import img4 from '../../assets/maingallery/4.jpg';
// import img5 from '../../assets/maingallery/5.jpg';
// import img6 from '../../assets/maingallery/6.jpg';
// import img7 from '../../assets/maingallery/7.jpg';
// import img8 from '../../assets/maingallery/8.jpg';
// import img9 from '../../assets/maingallery/9.jpg';
// import img10 from '../../assets/maingallery/10.jpg';
// import img11 from '../../assets/maingallery/11.jpg';
// import img12 from '../../assets/maingallery/12.jpg';
// import img13 from '../../assets/maingallery/13.jpg';
// import img14 from '../../assets/maingallery/14.jpg';
// import img15 from '../../assets/maingallery/15.jpg';
// import img16 from '../../assets/maingallery/16.jpg';
// import img17 from '../../assets/maingallery/17.jpg';
// import img18 from '../../assets/maingallery/18.jpg';
// import img19 from '../../assets/maingallery/19.jpg';
// import Foot from './footer';

// const images = [
//     { src: img1, alt: "Flag of India" },
//     { src: img2, alt: "2" },
//     { src: img3, alt: "3" },
//     { src: img4, alt: "4" },
//     { src: img5, alt: "5" },
//     { src: img6, alt: "6" },
//     { src: img7, alt: "7" },
//     { src: img8, alt: "8" },
//     { src: img9, alt: "9" },
//     { src: img10, alt: "10" },
//     { src: img11, alt: "11" },
//     { src: img12, alt: "12" },
//     { src: img13, alt: "13" },
//     { src: img14, alt: "14" },
//     { src: img15, alt: "15" },
//     { src: img16, alt: "16" },
//     { src: img17, alt: "17" },
//     { src: img18, alt: "18" },
//     { src: img19, alt: "19" },
// ];

// const Gallery = () => {
//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };

//     return (
//         <div className="flex flex-col items-center p-4 bg-gray-100 mt-24"> {/* Add margin-top here */}
//             <h1 className="text-3xl font-bold mb-8">Gallery</h1>
//             <LightGallery
//                 onInit={onInit}
//                 speed={500}
//                 plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
//                 className="lg-react-element"
//             >
//                 {images.map((image, index) => (
//                     <a href={image.src} key={index}>
//                         <img alt={image.alt} src={image.src} />
//                     </a>
//                 ))}
//             </LightGallery>
//             <Foot />
//         </div>
//     );
// };

// export default Gallery;


import React from 'react';
import LightGallery from 'lightgallery/react';
import './Gallery.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import img13 from '../../assets/gallery/yoga.jpg'
import img14 from '../../assets/gallery/milesaath.jpg'
import img15 from '../../assets/gallery/nanhimuskan.jpg'
import img12 from '../../assets/gallery/img0.jpg'
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
import Foot from './footer';

const images = [
    { src: img1, alt: "Flag of India" },
    { src: img2, alt: "2" },
    { src: img3, alt: "3" },
    { src: img4, alt: "4" },
    { src: img5, alt: "5" },
    { src: img6, alt: "6" },
    { src: img7, alt: "7" },
    { src: img8, alt: "8" },
    { src: img9, alt: "9" },
    { src: img10, alt: "10" },
    { src: img11, alt: "11" },
    { src: img12, alt: "12" },
    { src: img13, alt: "13" },
    { src: img14, alt: "14" },
    { src: img15, alt: "15" },
  
];

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 mt-24"> {/* Add margin-top here */}
            <h1 className="text-3xl font-bold mb-8">Gallery</h1>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
                className="lg-react-element"
            >
                {images.map((image, index) => (
                    <a href={image.src} key={index}>
                        <img alt={image.alt} src={image.src} />
                    </a>
                ))}
            </LightGallery>
            <Foot />
        </div>
    );
};

export default Gallery;