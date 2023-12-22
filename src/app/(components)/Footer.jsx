import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-[url('/frame.png')] bg-cover bg-no-repeat bg-[top] text-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:gap-10">
        <div className="flex flex-col items-start gap-6 md:w-2/6">
          <div className="font-semibold text-whitesmoke">Tech affairs logo</div>
          <div className="text-left text-whitesmoke">
            <p className="m-0">Lorem ipsum text about a paragraph on</p>
            <p className="m-0">the creative and talented works done by</p>
            <p className="m-0">tech affair.</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between md:w-4/6 md:gap-10">
          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">Students</div>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
          </div>

          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">Students</div>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
          </div>

          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">Students</div>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
            <a className="cursor-pointer">Link1</a>
          </div>
        </div>
      </div>
      <hr className="border-t border-white w-full" />
      <div className="text-center py-4 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
        <p className="text-xs sm:text-sm lg:text-base text-whitesmoke">
          © Technical Affairs IIITDM. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0 ">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6" alt="Instagram" src="/instagram.svg" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6" alt="LinkedIn" src="/linkedin.svg" />
          </a>

          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6" alt="LinkedIn" src="/facebook.svg" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="w-6 h-6" alt="LinkedIn" src="/twitter-1-1@2x.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
