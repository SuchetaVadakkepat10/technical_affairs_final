import React from "react";
import Modal from "react-modal";

const DisclaimerModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 overflow-y-auto hover:cursor-pointer"
      overlayClassName="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      contentLabel="Disclaimer Modal"
    >
      {/* Modal overlay */}
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      {/* Modal content */}
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>

      <div className="inline-block align-bottom border border-solid border-black bg-gradient-to-r from-[#ACDDF9] to-[#879CFD] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        {/* Close button */}
        <div className="absolute top-0 right-0 pt-4 pr-4 hover:cursor-pointer">
          <button
            onClick={onClose}
            type="button"
            className="text-black hover:text-black focus:outline-none focus:text-gray-500 transition ease-in-out duration-150 bg-transparent hover:cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Modal content here */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Content Disclaimer</h2>
          <hr className="border-t border-white w-full" />
          <p>
            All information provided in the &quot;Technical Affairs IIITDM
            Kancheepuram&quot; hereafter referred to as &quot;Tech
            Affairs&quot;, Website is provided for information purposes only and
            does not constitute a legal contract between Tech Affairs and any
            person or entity unless otherwise specified. Information on official
            Tech Affairs websites is subject to change without prior notice.
            Although every reasonable effort is made to present current and
            accurate information, Tech Affairs makes no guarantees of any kind.
            The Tech Affairs website may contain information that is created and
            maintained by a variety of sources both internal and external to the
            Institute. These sites are unmoderated forums containing the
            personal opinions and other expressions of the persons who post the
            entries. Tech Affairs does not control, monitor, or guarantee the
            information contained in these sites or information contained in
            links to other external websites, and does not endorse any views
            expressed or products or services offered therein. In no event shall
            Tech Affairs be responsible or liable, directly or indirectly, for
            any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods,
            or services available on or through any such site or resource.
          </p>
          <h2 className="text-2xl font-bold mb-2">Link Disclaimer</h2>
          <hr className="border-t border-white w-full" />
          <p>
            Any links to external websites and/or non-Institute information
            provided on tech Affairs pages or returned from tech Affairs web
            search engines are provided as a courtesy. They should not be
            construed as an endorsement by Tech Affairs of the content or views
            of the linked materials.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default DisclaimerModal;
