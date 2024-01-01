import React, { useState } from "react";
import Image from "next/image";
import DisclaimerModal from "./DisclaimerModal";
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top] text-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:gap-10">
        <div className="flex flex-col items-start gap-6 md:w-2/6">
          <div className="font-semibold text-whitesmoke ">
            <Image
              src="/tech_affairs_logo.jpeg"
              alt="Tech Affairs Logo"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-between md:w-4/6 md:gap-10">
          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">Innovation Grant and Support</div>
            <a
              className="cursor-pointer"
              href="https://www.iiitdm.ac.in/iic/forms"
            >
              Forms
            </a>
          </div>

          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">I2R MakerSpace</div>
            <a
              className="cursor-pointer"
              href="https://www.iiitdm.ac.in/iic/forms"
            >
              Forms
            </a>
          </div>
        </div>
      </div>
      <div className="text-left text-whitesmoke">
        <p className="m-0 text-center">
          Elevating Technology At IIITDM Kancheepuram
        </p>
      </div>
      <hr className="border-t border-white w-full" />
      <div className="text-center py-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <p className="text-xs sm:text-sm lg:text-base text-whitesmoke">
          © Technical Affairs IIITDM. All rights reserved.
        </p>
        <div>
          <button
            className="cursor-pointer bg-transparent text-white text-[15px] text-bold"
            onClick={openModal}
          >
            Disclaimer
          </button>
        </div>
        <DisclaimerModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="flex gap-4 mt-2 sm:mt-0 ">
          <a
            href="https://www.instagram.com/iiitdm.technical/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="Instagram" src="/instagram.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/technical-affairs-iiitdm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="LinkedIn" src="/linkedin.svg" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCV0JKK0XVBhzvtuofQB5_5g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="Yt" src="/youtube.svg" />
          </a>
          <a
            href="mailto:technical.affairs@iiitdm.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-6 h-6" alt="Mail" src="/mail.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
