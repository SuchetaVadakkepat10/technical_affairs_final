import React, { useState } from 'react';
import Image from 'next/image';

// Modal component
const Modal = ({ title, logo, onClose, details }) => {
    const [activeTab, setActiveTab] = useState('about');

    // Check if details is defined before accessing its properties
    const tabContent = {
      about: details && details.about && <div><p>{details.about}</p></div>,
      events: details && details.events && <div><p>{details.events}</p></div>,
      achievements: details && details.achievements && <div><p>{details.achievements}</p></div>,
    };

  return (
    <div className="fixed inset-0 overflow-y-auto">
      {/* Modal overlay */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal content */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom border border-solid border-black bg-gradient-to-r from-[#ACDDF9] to-[#879CFD] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Close button */}
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              type="button"
              className="text-black hover:text-black focus:outline-none focus:text-gray-500 transition ease-in-out duration-150 bg-transparent"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {/* Modal content here */}
          <div className="p-6">
            {/* Logo, Name, and Tabs */}
            <div className="flex flex-col items-center mb-4">
              <div className="logo-container mb-2 rounded-full overflow-hidden">
                <Image src={logo} alt={`${title} Logo`} width={100} height={100} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
              </div>
              {/* Tabs */}
              <div className="flex">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 mr-4 text-sm font-medium bg-transparent ${
                      activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Display tab content based on the active tab */}
            {tabContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;