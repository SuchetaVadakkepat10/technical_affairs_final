"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "../(components)/Card";
import Modal from "../(components)/Modal";
import Footer from "../(components)/Footer";
import ImageSlider from "../(components)/Slider";

/*{Instagram, LinkedIn, Yt, Website}*/
const cardsData = [
  {
    title: "AUV Society",
    logo: "/auv_club.png",
    links: [
      "https://www.instagram.com/auv_iiitdm/",
      "https://facebook.com/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "CS Club",
    logo: "/csclub_logo.jpg",
    links: [
      "https://www.instagram.com/cs.club.iiitdm?igsh=cW1naTRobnU5cWF1",
      "https://www.linkedin.com/company/cs-club-iiitdm-kancheepuram/",
      "https://instagram.comhttps://youtube.com/@csclubiiitdm8734?si=hqglenG1L9buTLW9/",
      "https://csclub.netlify.app/",
    ],
  },

  {
    title: "EPiC Club",
    logo: "/epic.jpg",
    links: [
      "https://www.instagram.com/epic_iiitdm/",
      "https://www.linkedin.com/company/epic-iiitdm/",
      "https://youtube.com/@epic_iiitdm?si=Tp1B4GHsvV1l3jVS",
      "",
    ],
  },
  {
    title: "GDSC IIITDM",
    logo: "/gdsc_club.png",
    links: [
      "https://www.instagram.com/gdsc_iiitdm/",
      "https://facebook.com/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "IPD Club",
    logo: "/ipd.jpg",
    links: [
      "https://www.instagram.com/sidi_iiitdm?igsh=cG9kejRzcTFydzFu",
      "https://www.linkedin.com/company/sidi-iiitdm/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "MaRS",
    logo: "/mars_club.png",
    links: [
      "https://www.instagram.com/mars_iiitdm/",
      "https://www.linkedin.com/company/mars-research-station/?miniCompanyUrn=urn%3Ali%3Afs_miniCompany%3A70999313&lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin%3BjjkHPQCJQvCxe7hwGRlA1Q%3D%3D",
      "https://www.youtube.com/@marsroversociety716",
      "https://linkedin.com/",
    ],
  },
  {
    title: "Optica IIITDM Student Chapter",
    logo: "/optica_club.jpg",
    links: [
      "https://www.instagram.com/iiitdm_optica/",
      "https://www.linkedin.com/company/osa-iiitdm-kancheepuram/",
      "https://instagram.com/",
      "https://sites.google.com/view/opticaiiitdm/people?authuser=0",
    ],
  },
  {
    title: "Robotics Club",
    logo: "/roboticsclub.png",
    links: [
      "https://www.instagram.com/roboticsclub.iiitdm/",
      "https://www.linkedin.com/company/robotics-club-iiitdm-kancheepuram/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "SAE Collegiate club of IIITDM Kancheepuram",
    logo: "/sae.jpg",
    links: [
      "https://www.instagram.com/sae_iiitdm?igsh=MWZ3eTY5aGNldTB2aA==",
      "https://www.linkedin.com/company/sae-iiitdm-kancheepuram/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "ASME IIITDM Student Section",
    logo: "/asme.png",
    links: [
      "https://twitter.com/",
      "https://facebook.com/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "IEEE Student Branch",
    logo: "/IEEE_logo.png",
    links: [
      "https://twitter.com/",
      "https://facebook.com/",
      "https://instagram.com/",
      "https://linkedin.com/",
    ],
  },
  {
    title: "TAD Aerodesign Club",
    logo: "/tad.jpg",
    links: [
      "https://www.instagram.com/idc_iiitdm?igsh=MWI3MWczY2V2M3BwOA%3D%3D&utm_source=qr",
      "",
      "",
      "",
    ],
  },
];
//Visuals from events of IIITDM
const sliderImages = [
  "/friction_individual achievement.jpg",
  "/lamplighting.jpeg",
  "/Entrance.jpeg",
  "/Vashisht23_Panel Discussion.jpeg",
  "/Vashisht23_Pitch Fest.jpeg",
  "/Vashisht23_Valedictory Prize Distribution by director.jpeg",
  "/Vashisht23_Juniors Edition.jpeg",
  "/Vashisht23_Juniors Science Expo.jpeg",
  "/Vashisht23_Typing Contest With Dean AA.jpeg",
  "/Vashisht23_Valedictory Guest Contentstach CTO Nishant Patel Speech.jpeg",
];

const CustomArrow = ({ direction, onClick }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === "left" ? "left-0" : "right-0"
    }`}
    style={{ cursor: "pointer", zIndex: 1 }}
    onClick={onClick}
  >
    {direction === "left" ? (
      <FaChevronLeft size={30} />
    ) : (
      <FaChevronRight size={30} />
    )}
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
  customPaging: function (i) {
    return (
      <div
        style={{
          width: "30px",
          color: "white",
          border: "1px solid white",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        {i + 1}
      </div>
    );
  },
};

const aboutInfo = "This is information about the club.";
const eventsInfo = "These are the events organized by the club.";
const achievementsInfo = "These are the achievements of the club.";

const tabContent = [
  { title: "About", content: aboutInfo },
  /*{{ title: "Events", content: eventsInfo },
  { title: "Achievements", content: achievementsInfo },*/
];

const clubDetails = [
  // Details for AUV Club
  {
    title: "AUV Society",
    about:
      "A group of undergraduate engineering students collaborating in an interdisciplinary society dedicated to designing and building underwater systems and vehicles for participation in diverse underwater robotics competitions. With a profound understanding of mechanical, electronics, and software engineering, we exploit our theoretical knowledge to create underwater vehicles capable of exploring the expansive ocean depths.",
    /*events: "AUV Club regularly organizes workshops and seminars...",
    achievements: "AUV Club has won several awards in national...",*/
  },
  // Details for CS Club
  {
    title: "CS Club",
    about:
      "Here at the CS Club, we act as a gateway for students to enter the Computer Science Community and Industry. We strive to educate, train, and guide students as they build towards a profession in the CS Industry. We are not just a club, we are an independent body where students learn together, help each other sharpen their skills and create their future in the industry. We help students passionate in the field of Computer Science by providing lectures and activities on the newest branches of Computer Science, training them in the exciting sport of competitive programming, hackathons, CTFs. Introducing students to the Computer Science Industry by hosting Industrial Talks and Research Projects",
    /*events: "CS Club conducts coding competitions and hackathons...",
    achievements: "CS Club members have participated and excelled in...",*/
  },

  // Details for EPiC Club
  {
    title: "EPiC Club",
    about:
      "The Entrepreneurship and Investment Club (EPIC), lends a helping hand to shape your dream into a commercial reality. The aim is to provide the necessary platform for the students with the ambition and determination to pursue the life long journey of becoming an entrepreneur. EPIC encourages ingenious thinking and provokes students to generate novel ideas making it truly the “centre” for innovation in the commercial sector.",
    /*events:
      "EPiC Club hosts photography exhibitions and filmmaking workshops...",
    achievements:
      "EPiC Club members have won awards in national photography contests...",*/
  },
  // Details for GDSC Club
  {
    title: "GDSC IIITDM",
    about:
      "“Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.",
    /*events: "GDSC Club conducts coding challenges and hackathons...",
    achievements:
      "GDSC Club projects have been featured in Google showcases...",*/
  },
  // Details for IDC Club
  {
    title: "IPD Club",
    about:
      "Welcome to the world of innovation and sustainability, where design meets technology, society, and the environment in perfect harmony. Introducing the Integrated Product Design club, or IPD for short, where creative minds converge to shape the future through their passion for design that transcends boundaries. At IPD, we believe in the power of synergy, bringing together diverse perspectives and skillsets. With a deep appreciation for the interconnectedness of design, technology, society, and the environment, we invite you to embark on a journey of creativity, purpose, and positive impact with us.",
    /*events:
      "IDC Club organizes design thinking workshops and UX design competitions...",
    achievements:
      "IDC Club projects have received accolades in design competitions...",*/
  },
  // Details for Mars Club
  {
    title: "MaRS",
    about:
      "We are Mars Rover Students (MaRS) Club from Indian Institute of Information Technology, Design & Manufacturing, Kancheepuram, a team of 40 interdisciplinary students, interested in building robots and autonomous systems. Currently, we are focusing on building autonomous UGVs (specifically rovers) and robotic arms.Our problem statement revolves around the exploration of inhabitable zones. Our goal is to build a system that can withstand any possible terrain. Currently, to reach our goals, we, Team SHUNYA (from MaRS Club), are participating in different rover challenges(IRC, URC, ARCh, ERC) at the global level to train our systems.Recently we secured 3rd Rank in Asia (6th Rank Globally) in the Finals of European Rover Challenge (ERC) Remote-Edition & 3rd Rank in India (21st Rank Globally) in the Finals of European Rover Challenge (ERC) Onsite-Edition.",
    /*events: "Mars Club organizes stargazing nights and astronomy lectures...",
    achievements:
      "Mars Club members have discovered new celestial phenomena...",*/
  },
  // Details for Optica Club
  {
    title: "Optica IIITDM Student Chapter",
    about:
      "OPTICA (formerly known as OSA) mission is to promote the generation, application, and archiving of knowledge in optics and photonics and to disseminate this knowledge worldwide.",
    /*events:
      "Optica Club conducts laser physics workshops and optical experiments...",
    achievements:
      "Optica Club research has been published in renowned journals...",*/
  },
  // Details for Robotics Club
  {
    title: "Robotics Club",
    about:
      "Robotics plays a major role in making our day to day life easier. It unifies various branches of engineering and also symbolises the importance of one branch in the other. This promotes hands-on and cooperative learning and also engages students in problem-solving and higher-order thinking. People taking part in the sessions with dedication get exposure to many other areas apart from their syllabus.The organization is centered around a platform for members and non-member students with a passion for robotics to come together and develop projects in the domain of robotics and to also act as a channel for various students to come together to participate in multiple robotics-based competitions. “Inspire, Introduce, Initiate” is the mantra of the club.",
    /*events: "Robotics Club hosts robot competitions and tech talks...",
    achievements:
      "Robotics Club has won awards in national and international robotics competitions...",*/
  },
  // Details for SAE Club
  {
    title: "SAE Collegiate club of IIITDM Kancheepuram",
    about:
      "The purpose of this organisation is to provide its members opportunities to gain broader insight into the engineering profession by sponsoring meetings that will bring practising engineers to the campus, arranging field trips to research and engineering establishments, sponsoring student projects of engineering interest, and participating in SAEINDIA Section activities to hold up the values instilled by the institution.",
    /*events: "SAE Club organizes Baja and Formula competitions...",
    achievements:
      "SAE Club vehicles have achieved top positions in national competitions...",*/
  },
  // Details for ASME Club
  {
    title: "ASME IIITDM Student Section",
    about:
      "The American Society of Mechanical Engineers (ASME) international association strives  to promote the art, science and practice of multidisciplinary engineering and allied sciences around the globe. Established under the banner of IIITDM Kancheepuram, our mission is to foster a vibrant and creative learning environment where students can explore their interests and collaborate on exciting projects. With a commitment to both professional and personal growth, we organize workshops, seminars, and hands-on activities that empower students to develop essential skills and gain practical experience. Whether you're interested in robotics, sustainable design, or cutting-edge technologies, our diverse range of events and projects ensures that there's something for everyone. The exposure and experience gained goes far beyond your textbooks.",
    /* events:
      "ASME Club conducts engineering design challenges and conferences...",
    achievements:
      "ASME Club members have received recognition for innovative mechanical designs...",*/
  },

  // Details for IEEE Club
  {
    title: "IEEE Student Branch",
    about:
      "IIITDM Kancheepuram, inaugurated its IEEE Student Branch on 27th October 2016 in the presence of Mr. H. R. Mohan (then Vice Chair of IEEE Madras Section Student Activities, IEEE Madras Section Chair, IEEE PCS, Madras) as the Chief Guest, and Mr.P.Sakthivel (then Treasurer and Secretary of IEEE Madras Section) and Mr.S. Koteeswaran (then Member of Executive Committee) as the Guests of Honour. Prof. M.D Selvaraj is the founder Student Branch Counselor of IEEE SB and Dr. Chitti Babu is the present Student Branch Counselor of IEEE SB.IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of humanity. IEEE and its members inspire a global community through IEEE's highly cited publications, conferences, technology standards, and professional and educational activities. Through the student branch in our college we aim to provide you with opportunities to expand your technical skills, network with industry professionals, and make a positive impact on our community. Join us in shaping the future of technology, together.",
    /*events:
      "IEEE Club organizes technical symposiums and innovation challenges...",
    achievements:
      "IEEE Club projects have received awards in IEEE conferences...",*/
  },
  //Details of TAD Club
  {
    title: "TAD Aerodesign Club",
    about:
      "TAD Club (Talpade Aero Design Club) at IIITDM Kancheepuram is a new and dynamic student organisation that is dedicated to the world of aero design. Our club brings together passionate engineering minds with a shared vision - to design, innovate, and contribute to the field of aeronautics. We aim to design and construct high-performance RC planes with an eye for precision and innovation. These planes are developed to excel in various national-level aeromodeling contests. Our club brings together like-minded individuals who are passionate about designing cutting-edge RC planes and aero design vehicles.",
  },
];

const CardPage = () => {
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
    <main>
      <div className="relative bg-white lg:w-full sm:w-full h-[2721px] overflow-x-hidden text-center text-base text-black font-image-text">
        <div className="absolute top-[0px] left-[-26px] lg:w-[101vw] lg:h-[401px] overflow-hidden text-29xl first">
          <div className="absolute top-[712px] left-[687px] flex flex-row items-start justify-start gap-[16px] opacity-[0]">
            <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
            <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
            <div className="relative rounded-[50%] bg-black w-[15px] h-[15px]" />
          </div>
          <img
            className="absolute top-[0px] left-[26px] w-[100vw] h-[979px] object-cover first-img"
            alt=""
            src="/unsplashi6at9f7mwdq@2x.png"
          />
          <div className="absolute w-[calc(100%_+_3px)] top-[0px] right-[0px] left-[0px] [background:linear-gradient(180.03deg,_rgba(0,_0,_0,_0.5),_rgba(0,_0,_0,_0)_51.48%,_#000)] h-[401px]" />
          <b className="absolute top-[308px] left-[calc(50%_-_279px)] weare text-white">
            We are Technical affairs
          </b>
        </div>

        {/* Extend the background image in mobile view */}
        <div className="sm:hidden bg-gainsboro-100 h-40" />
        <div class="flex items-center justify-center">
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 p-3 lg:ml-8 mx-auto"
            style={{
              marginTop: "450px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {cardsData.map((card, index) => (
              <div key={index} onClick={() => handleLogoClick(card)}>
                <Card title={card.title} logo={card.logo} links={card.links} />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for detailed information */}
        {selectedClub && isModalOpen && (
          <Modal
            title={selectedClub.title}
            logo={selectedClub.logo}
            details={clubDetails.find(
              (club) => club.title === selectedClub.title
            )}
            onClose={closeModal}
          />
        )}

        <div className="font-bold text-xl flex justify-center mt-5 px-4 sm:px-8 py-4 sm:py-8">
          <h1>VISUALS FROM SOME EVENTS</h1>
        </div>
        <ImageSlider></ImageSlider>
      </div>
      <Footer />
    </main>
  );
};

export default CardPage;
