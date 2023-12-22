'use client';

import { useState } from "react";
import MemberCard from "../(components)/MemberCard";

const Home1 = () => { 

  const arr = [1,2,3,4,5,6,7]

  const [image,setImage] = useState('/unsplashmxvkwpijals1@2x.png');


  return (
    <div className="relative bg-text-color lg:w-full sm:w-full h-[2721px] overflow-x-hidden text-center text-base text-text-color font-image-text">
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
        <b className="absolute top-[308px] left-[calc(50%_-_279px)] weare">
          We are Technical affairs
        </b>
      </div>
      <div className="absolute top-[521px] left-[50px] flex lg:flex-row items-center justify-start gap-[166px] text-left lg:text-17xl md:text-4xl text-black font-inter lg:w-[600px] md:w-[325px] about-us">
        <div className="flex flex-col items-start justify-start gap-[26px] lg:w-[700px] sm:w-[320px]">
          <div className="relative font-semibold inline-block sm:w-full md:w-[662px] about-title">
            About Us
          </div>
          <div class="capitalize inline-block md:w-full lg:w-[600px] lg:text-9xl sm:text-2xl md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="relative flex flex-row w-[510px] h-[183px] text-xs text-text-color font-image-text about-image">
          <div className=" rounded-tl-3xs rounded-tr-none rounded-b-none w-[255px] h-[182.7px] overflow-hidden img-abt">
            <img
              className=" w-[268px] h-[406px] object-cover"
              alt=""
              src="/unsplashmxvkwpijals@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[255px] h-[182.7px] gra" />
            <b className="relative bottom-[40px] w-[81.2px] h-[15.4px]">Experience</b>
          </div>
          <div className=" rounded-tl-none rounded-tr-3xs rounded-b-none w-[255px] h-[182.7px] overflow-hidden img-abt">
            <img
              className=" w-[285px] h-[190px] object-cover"
              alt=""
              src="/unsplashourqhrte2im@2x.png"
            />
            <div className="absolute top-[0px] left-[255px] rounded-tl-none rounded-tr-3xs rounded-b-none [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[255px] h-[182.7px] gra" />
            <b className="relative bottom-[40px] left-[20px] w-[81.2px] h-[15.4px]">
              Hackathons
            </b>
          </div>
        </div>
      </div>
      <div className="absolute top-[904px] left-[0px] w-[100vw] overflow-hidden flex flex-col items-center justify-center py-[72px] px-[54px] bg-[url('/frame-37@3x.png')] bg-cover bg-no-repeat bg-[top] text-17xl journey">
        <div className="flex flex-row items-center justify-start gap-[213px] j-content">
          <div className="flex flex-col items-start justify-start gap-[30px] ">
            <b className="relative oj">Our Journey</b>
            <div className="w-[551px] flex flex-col items-start justify-start text-left text-xl select-bar">
              <div className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black" onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs  w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our first Vashisht in 2019
                </div>
              </div>
              <div className="relative w-[551px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] h-[50px] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our first Vashisht in 2019
                </div>
              </div>
              <div className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our first Vashisht in 2019
                </div>
              </div>
              <div className="relative w-[551px] h-[50px] cursor-pointer hover:[background:linear-gradient(90deg,_#acddf9,_#879cfd)] hover:text-black"  onClick={() => (setImage('/unsplashmxvkwpijals1@2x.png'))}>
                <div className="absolute top-[0px] left-[0px] rounded-8xs w-[551px] h-[50px]" />
                <div className="absolute top-[12px] left-[10px] capitalize font-medium inline-block w-[373.8px] ofv">
                  Our first Vashisht in 2019
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[18px] text-left text-9xl ji">
            <div className="relative w-[567px] h-[136px] overflow-hidden shrink-0 journey-img">
              <img
                className="absolute top-[0px] left-[0px] w-[604px] h-[916px] object-cover"
                alt=""
                src={image}
              />
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(179.91deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.2))] w-[567px] h-[136px]" />
            </div>
            <div className="relative font-medium inline-block w-[567px] eve">
              Event
            </div>
            <div className="relative text-xl capitalize inline-block w-[568px] eve">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-[1325px] left-[calc(50%_-_719px)] overflow-hidden flex flex-col items-start justify-start py-[72px] px-[49px] text-black team">
        <div className="flex flex-col items-center justify-start gap-[50px]">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[102px] flex flex-row items-center justify-center p-2.5 box-border">
              <div className="relative">Team</div>
            </div>
            <b className="relative text-17xl inline-block w-[1340px]">Our lovely team</b>
          </div>
          <div className="flex flex-col items-center justify-start gap-[50px] text-left text-9xl font-inter">
            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Faculty Heads & Team lead</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text divalign">
              <div className="flex flex-row gap-[26px]">
                <div className="relative w-[138px] h-[103px]">
                  <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                    <b className="absolute top-[64px] left-[calc(50%_-_42px)]">
                      Dr. Siva Selvan
                    </b>
                    <div className="absolute top-[80px] left-[calc(50%_-_21px)] text-3xs">
                      Dean-SA
                    </div>
                  </div>
                  <img
                    className="absolute top-[10px] left-[45px] rounded-[112px] w-12 h-12 object-cover"
                    alt=""
                    src="/image-38@2x.png"
                  />
                </div>
                <div className="relative rounded-8xs w-[138px] h-[103px]">
                  <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                  <b className="absolute top-[64px] left-[calc(50%_-_47px)]">
                    Dr. Parvathy Das
                  </b>
                  <div className="absolute top-[80px] left-[calc(50%_-_35px)] text-3xs">
                    Faculty Advisor
                  </div>
                  <img
                    className="absolute top-[10px] left-[45px] rounded-[300px] w-12 h-12 object-cover"
                    alt=""
                    src="/image-39@2x.png"
                  />
                </div>
                </div>
                <div className="flex flex-row gap-[26px]">
                <div className="flex flex-col items-center justify-start">
                  <div className="relative w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                      <b className="absolute top-[64px] left-[calc(50%_-_52px)]">
                        G.Praneeth kumar
                      </b>
                      <div className="absolute top-[80px] left-[calc(50%_-_45px)] text-3xs">
                        Technical secretary
                      </div>
                    </div>
                    <img
                      className="absolute top-[10px] left-[45px] rounded-81xl w-12 h-12 object-cover"
                      alt=""
                      src="/image-40@2x.png"
                    />
                  </div>
                  <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
                    <img
                      className="relative w-[12.3px] h-[12.3px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start">
                  <div className="relative w-[138px] h-[103px]">
                    <div className="absolute top-[0px] left-[0px] w-[138px] h-[103px]">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs [background:linear-gradient(90deg,_#acddf9,_#879cfd)] w-[138px] h-[103px]" />
                      <b className="absolute top-[64px] left-[calc(50%_-_26px)]">
                        Sundar S
                      </b>
                      <div className="absolute top-[80px] left-[calc(50%_-_56px)] text-3xs">
                        Joint Technical Secretary
                      </div>
                    </div>
                    <img
                      className="absolute top-[10px] left-[calc(50%_-_24px)] rounded-81xl w-12 h-12 object-cover"
                      alt=""
                      src="/image-40@2x.png"
                    />
                  </div>
                  <div className="rounded-[34.21px] [background:linear-gradient(90deg,_#acddf9,_#879cfd)] overflow-hidden flex flex-row items-start justify-start p-[6.842105388641357px] mt-[-7px]">
                    <img
                      className="relative w-[12.3px] h-[12.3px]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtl">Team members</div>
              <div className="flex flex-row items-start justify-start gap-[26px] text-xs font-image-text animate-scrolling">
                {arr.map((member,index) => (
                  <MemberCard key={index} name = "G Praneeth Kumar" />
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-start gap-[30px]">
              <div className="relative capitalize fhtln">
                <span>Designed and developed with</span>
                <span className="text-red">❤</span>
                <span>️ by</span>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] text-xs font-image-text animate-scrolling">
                {arr.map((member,index) => (
                    <MemberCard key={index} name = "G Praneeth Kumar" />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] w-[100vw] flex flex-col items-start justify-start p-[50px] box-border bg-[url('/footer@3x.png')] bg-cover bg-no-repeat bg-[top] foot">
        <div className="flex flex-col items-start justify-start gap-[126px]">
          <div className="flex flex-row items-start justify-start gap-[579px] sample">
            <div className="flex flex-col items-start justify-start gap-[13px] textdiv">
              <div className="">Tech affairs IIITDM</div>
              <div className="relative text-left">
                <p className="m-0">Lorem ipsum text about a paragraph on</p>
                <p className="m-0">the creative and talented works done by</p>
                <p className="m-0">tech affair.</p>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[120px] text-left font-inter links">
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">
                  Students
                </div>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">
                  Students
                </div>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
              <div className="flex flex-col items-start justify-start gap-[13px]">
                <div className="relative font-semibold text-center">
                  Students
                </div>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
                <a className="relative cursor-pointer">Link1</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[11px] text-left font-inter">
            <div className="relative box-border w-[1340px] h-px border-t-[1px] border-solid border-text-color line" />
            <div className="w-[1339px] flex flex-col items-start justify-start p-2.5 box-border">
              <div className="w-[1329px] flex flex-row items-center justify-start gap-[799px] last">
                <div className="relative bottom-content">
                  © Technical Affairs IIITDM. All rights reserved.
                </div>
                <div className="flex flex-row items-center justify-center gap-[18px] icons">
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/instagram.svg"
                  />
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/linkedin.svg"
                  />
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/youtube.svg"
                  />
                  <img
                    className="relative w-8 h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/facebook.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
