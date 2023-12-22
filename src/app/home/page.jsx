'use client'
import React from 'react';
import { useState } from "react";
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

import Footer from '../(components)/Footer';

const Home = () => {
  const [image,setImage] = useState('/unsplashmxvkwpijals1@2x.png');
  return (
    <div className="relative bg-white w-full overflow-hidden text-left text-base text-black font-inter">

      {/* Vector and text section */}
      <div className="relative w-full h-[322px] bg-gainsboro-100 flex items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          />
          <div className="font-semibold text-black">Lorem Ipsum</div>
        </div>
      </div>

      {/* Cards section */}
      <div className="flex flex-col items-center justify-center mt-8 space-y-4 pb-12">
        <div className="flex justify-center items-center flex-col md:flex-row md:space-x-4 space-y-3 lg:space-x-8">
          <CardWrapper title="Workshops" number="50+" />
          <CardWrapper title="Techfests" number="5+" />
          <CardWrapper title="Seminars" number="50+" />
          <CardWrapper title="Rankings" number="10+" />
          <CardWrapper title="Collaborations" number="20+" />
        </div>
      </div>

  <div class="text-center sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-8 ">
  <div class="flex flex-col items-center justify-center gap-4">
  <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <p className='text-xs sm:text-sm'>About</p>
    </div>
    <h1>All you need to know about us</h1>
  </div>
  <div class="flex flex-col sm:flex-row items-center text-left sm:gap-8 ml-4">
    <div class="sm:w-1/2">
      <h2 className='lg:ml-8'>We are Technical Affairs IIITDM</h2>
      <p className='lg:ml-8 font-normal'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus ante, consequat non elit non, posuere bibendum metus. Nullam at ex vitae est gravida convallis non nec nulla. Duis auctor auctor mauris, non fringilla massa consectetur a. Nullam vel diam eget lectus tincidunt varius in vitae nisi.
      </p>
      <div class=" lg:ml-8 rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[120px] h-[50px] flex items-center justify-center p-2 box-border" style={{ borderRadius: '10px' }}>
        <div><p className='text-normal font-semibold'>Know more</p></div>
      </div>
    </div>
    
    <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-12">
      {/* First image */}
      <Image
            src="/"
            alt="Vector"
            width={50}
            height={50}
          />
    </div> 
  </div>
</div>

<div className="relative bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top] text-center mb-8">
  <div className="flex flex-col items-center justify-center gap-4 mt-8">
    <div className="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <p className='text-xs sm:text-sm eve'>Events</p>
    </div>
    <h1 className='text-white'>Know what is happening in tech around IIITDM</h1>
  </div>
  <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mx-16">
    <div className="sm:w-1/2">
    <div className="w-[551px] flex flex-col items-start justify-start text-left text-xl select-bar text-white mb-12">
              <div className="font-semibold relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Hackathon 2.0
                </div>
              </div>
              <div className="relative w-[200px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-[50px] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Event 2
                </div>
              </div>
              <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                Event 3
                </div>
              </div>
              <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                Event 4
                </div>
              </div>
              <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                Event 5
                </div>
              </div>
              <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                Event 6
                </div>
              </div>
              <div className="relative w-[200px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                Event 7
                </div>
              </div>
            </div>
    </div>
    <div className="sm:w-1/2 mt-8 sm:mt-0">
    <div className="flex flex-col items-end justify-start gap-[18px] text-left text-9xl ji">
            <div className="relative w-[567px] h-[136px] overflow-hidden shrink-0 journey-img">
              {/* Pending section */}
            </div>
          </div>
    </div>
  </div>
</div>
{/* Clubs section */}


<div class="text-center sm:text-3xl md:text-4xl lg:text-5xl mt-12 mb-8">
  <div class="flex flex-col items-center justify-center gap-4">
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-2 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <div><p className='text-xs'>Clubs</p></div>
    </div>
    <h1>Technical clubs in IIITDM</h1>
  </div>
  <div class="flex flex-col sm:flex-row items-center text-left sm:gap-8 ml-4">
    <div class="sm:w-1/2">
    <h2 className='lg:ml-8'>We have diversity in clubs</h2>
      <p className='lg:ml-8 font-normal'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus ante, consequat non elit non, posuere bibendum metus. Nullam at ex vitae est gravida convallis non nec nulla. Duis auctor auctor mauris, non fringilla massa consectetur a. Nullam vel diam eget lectus tincidunt varius in vitae nisi.
      </p>
      <div class=" lg:ml-8 rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[120px] h-[50px] flex items-center justify-center p-2 box-border" style={{ borderRadius: '10px' }}>
        <div><p className='text-normal'>Know more</p></div>
      </div>
    </div>
    
    <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-8 md-12">
      {/* First image */}
      <Image
            src="/spinny.gif"
            alt="Vector"
            width={50}
            height={50}
          />
    </div> 
  </div>
</div>


{/* Our Annual techfest Vashisht */}

<div class="text-center sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-8 bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top]">
  <div class="flex flex-col items-center justify-center gap-4">
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-2 box-border h-10 mt-8" style={{ borderRadius: '10px' }}>
      <div><p className='text-xs'>Fest</p></div>
    </div>
    <h1 className='text-white'>Our Annual Techfest Vashisht</h1>
  </div>
  <div class="flex flex-col sm:flex-row items-center text-left sm:gap-8 ml-4 text-white pb-12">
    <div class="sm:w-1/2">
    <h2 className='lg:ml-8'>We have diversity in clubs</h2>
      <p className='lg:ml-8 font-normal'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lectus ante, consequat non elit non, posuere bibendum metus. Nullam at ex vitae est gravida convallis non nec nulla. Duis auctor auctor mauris, non fringilla massa consectetur a. Nullam vel diam eget lectus tincidunt varius in vitae nisi.
      </p>
      <div class=" lg:ml-8 rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[120px] h-[50px] flex items-center justify-center p-2 box-border" style={{ borderRadius: '10px' }}>
        <div><p className=' font-semibold text-normal text-black '>Know more</p></div>
      </div>
    </div>
    
    <div className="sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0 mr-4 sm:mr-8 lg:mr-8 pb-12">
      {/* First image */}
      <Image
            src="/"
            alt="Vector"
            width={50}
            height={50}
          />
    </div> 
  </div>
</div>

{/* Sponsor section */}
<div class=" text-center sm:text-3xl md:text-4xl lg:text-5xl mt-8 mb-12">
  <div class="flex flex-col items-center justify-center gap-4 mt-8">
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-10" style={{ borderRadius: '10px' }}>
      <div><p class='text-xs sm:text-sm'>Sponsors</p></div>
    </div>
    <h1 class="text-sm sm:text-lg md:text-xl lg:text-2xl">Our Past Sponsors</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> 
        <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          />
        </div>
    </div>

    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> 
        <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          />
        </div>
    </div>

    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> 
        <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>
    
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
     <div> 
      <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          />
        </div>
    </div>

    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>
    
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>

    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>
    
    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>

    <div class="rounded-8xs bg-gradient-to-r from-[#acddf9] to-[#879cfd] w-[100px] flex items-center justify-center p-1 box-border h-auto">
      <div> <Image
            src="/vector.svg"
            alt="Vector"
            width={50}
            height={50}
          /></div>
    </div>

  
    
  </div>
</div>



<Footer />
    </div>
  );
};

const CardWrapper = ({ title, number }) => {
  return (
    <Card className="[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-8 w-40 text-black flex flex-col justify-center items-center p-12  sm:w-1/2 md:w-1/2 lg:w-1/5" style={{ borderRadius: '10px' }}>
      <h1 className='text-center text-2xl'>{number}</h1>
      <p className='text-center'>{title}</p>
    </Card>
  );
};

export default Home;
