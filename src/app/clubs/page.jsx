'use client'
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import Card from '../(components)/Card';
import Modal from '../(components)/Modal';
import Footer from '../(components)/Footer';



const cardsData = [
  { title: 'AUV Club', logo: '/auv_club.png', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'CS Club', logo: '/csclub_logo.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'EDC Club', logo: '/edc_club.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'EPiC Club', logo: '/EPic_club.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'GDSC Club', logo: '/gdsc_club.png', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'IDC Club', logo: '/idc_club.png', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'Mars Club', logo: '/mars_club.png', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'Optica Club', logo: '/optica_club.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'Robotics Club', logo: '/roboticsclub.png', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'SAE Club', logo: '/sae.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'ASME ', logo: '/sae.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] },
  { title: 'IEEE ', logo: '/sae.jpg', links: ['https://twitter.com/', 'https://facebook.com/', 'https://instagram.com/', 'https://linkedin.com/'] }
];

const sliderImages = [
  '/sae.jpg',
  '/sae.jpg',
  '/sae.jpg',
];
const CustomArrow = ({ direction, onClick }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === 'left' ? 'left-0' : 'right-0'
    }`}
    style={{ cursor: 'pointer', zIndex: 1 }}
    onClick={onClick}
  >
    {direction === 'left' ? <FaChevronLeft size={30} /> : <FaChevronRight size={30} />}
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <CustomArrow direction="right" />,
  prevArrow: <CustomArrow direction="left" />,
};

const aboutInfo = "This is information about the club.";
const eventsInfo = "These are the events organized by the club.";
const achievementsInfo = "These are the achievements of the club.";

const tabContent = [
  { title: "About", content: aboutInfo },
  { title: "Events", content: eventsInfo },
  { title: "Achievements", content: achievementsInfo },
];

const clubDetails = [
  // Details for AUV Club
  {
    title: 'AUV Club',
    about: 'AUV Club is dedicated to underwater robotics...',
    events: 'AUV Club regularly organizes workshops and seminars...',
    achievements: 'AUV Club has won several awards in national...',
  },
  // Details for CS Club
  {
    title: 'CS Club',
    about: 'CS Club focuses on computer science and programming...',
    events: 'CS Club conducts coding competitions and hackathons...',
    achievements: 'CS Club members have participated and excelled in...',
  },
  // Details for EDC Club
  {
    title: 'EDC Club',
    about: 'EDC Club promotes entrepreneurship and innovation...',
    events: 'EDC Club organizes startup weekends and mentoring sessions...',
    achievements: 'EDC Club startups have received recognition...',
  },
  // Details for EPiC Club
  {
    title: 'EPiC Club',
    about: 'EPiC Club explores and promotes photography and cinematography...',
    events: 'EPiC Club hosts photography exhibitions and filmmaking workshops...',
    achievements: 'EPiC Club members have won awards in national photography contests...',
  },
  // Details for GDSC Club
  {
    title: 'GDSC Club',
    about: 'GDSC Club focuses on Google technologies and development...',
    events: 'GDSC Club conducts coding challenges and hackathons...',
    achievements: 'GDSC Club projects have been featured in Google showcases...',
  },
  // Details for IDC Club
  {
    title: 'IDC Club',
    about: 'IDC Club is dedicated to interaction design and creativity...',
    events: 'IDC Club organizes design thinking workshops and UX design competitions...',
    achievements: 'IDC Club projects have received accolades in design competitions...',
  },
  // Details for Mars Club
  {
    title: 'Mars Club',
    about: 'Mars Club explores space science and astronomy...',
    events: 'Mars Club organizes stargazing nights and astronomy lectures...',
    achievements: 'Mars Club members have discovered new celestial phenomena...',
  },
  // Details for Optica Club
  {
    title: 'Optica Club',
    about: 'Optica Club focuses on optics and photonics research...',
    events: 'Optica Club conducts laser physics workshops and optical experiments...',
    achievements: 'Optica Club research has been published in renowned journals...',
  },
  // Details for Robotics Club
  {
    title: 'Robotics Club',
    about: 'Robotics Club is dedicated to building and programming robots...',
    events: 'Robotics Club hosts robot competitions and tech talks...',
    achievements: 'Robotics Club has won awards in national and international robotics competitions...',
  },
  // Details for SAE Club
  {
    title: 'SAE Club',
    about: 'SAE Club focuses on automotive engineering and vehicle design...',
    events: 'SAE Club organizes Baja and Formula competitions...',
    achievements: 'SAE Club vehicles have achieved top positions in national competitions...',
  },
// Details for ASME Club
{
  title: 'ASME Club',
  about: 'ASME Club is dedicated to mechanical engineering and innovation...',
  events: 'ASME Club conducts engineering design challenges and conferences...',
  achievements: 'ASME Club members have received recognition for innovative mechanical designs...',
},

  // Details for IEEE Club
  {
    title: 'IEEE Club',
    about: 'IEEE Club focuses on electrical and electronics engineering...',
    events: 'IEEE Club organizes technical symposiums and innovation challenges...',
    achievements: 'IEEE Club projects have received awards in IEEE conferences...',
  }
];

const  CardPage = () => {
  
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedTab, setSelectedTab] = useState("About");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedClub(null);
    setIsModalOpen(false);
  };
  return (
    <div className="relative bg-white w-full overflow-hidden text-left text-base text-black font-inter">
      <div className="absolute top-0 left-0 w-full h-[322px] text-center text-[64px]">
        <div className="absolute w-full top-0 right-0 left-0 bg-gainsboro-100 h-[322px]" />
        <Image
          className="w-16 md:w-32 lg:w-48 mx-auto mt-4"
          alt=""
          src="/vector.svg"
          width={54}
          height={54}
        />

        <div className="absolute top-[206px] left-1/2 transform -translate-x-1/2 font-semibold">
          Technical Clubs of IIITDM
        </div>
      </div>

      {/* Extend the background image in mobile view */}
      <div className="sm:hidden bg-gainsboro-100 h-40" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-3 lg:ml-8" style={{ marginTop: "500px", marginLeft: "auto", marginRight: "auto" }}>
        {cardsData.map((card, index) => (
          <div key={index} onClick={() => handleLogoClick(card)}>
            <Card title={card.title} logo={card.logo} links={card.links} />
          </div>
        ))}
      </div>

      {/* Modal for detailed information */}
      {selectedClub && isModalOpen && (
        <Modal
          title={selectedClub.title}
          logo={selectedClub.logo}
          details={clubDetails.find((club) => club.title === selectedClub.title)}
          onClose={closeModal}
        />
      )}

      <div className="font-bold text-xl flex justify-center mt-10 px-4 sm:px-8 py-4 sm:py-8">
        <h1>VISUALS FROM SOME EVENTS</h1>
      </div>
      <Slider {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Slider Image ${index}`} width={500} height={500} />
          </div>
        ))}
      </Slider>

      <Footer />
      
    </div>
  );
};

export default CardPage;