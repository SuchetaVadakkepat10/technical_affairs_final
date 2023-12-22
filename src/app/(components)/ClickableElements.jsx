import React from 'react';

const ClickableElements = ({ setImage }) => {
  const handleClick = () => {
    setImage('/newImage.jpg');
  };

  return (
    <div className="flex flex-col items-start justify-start gap-6">
      <b className="relative font-bold">Our Journey</b>
      <div className="w-full flex flex-col items-start justify-start text-left text-base sm:text-xl select-bar">
        {/* Your clickable elements */}
        <div
          className="relative w-full h-[50px] cursor-pointer hover:bg-gradient hover:text-black"
          onClick={handleClick}
        >
          {/* Element content */}
        </div>
        {/* Add more clickable elements if needed */}
      </div>
    </div>
  );
};

export default ClickableElements;