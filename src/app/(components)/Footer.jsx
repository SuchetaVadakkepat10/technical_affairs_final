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
        <div className="flex flex-col items-center md:items-start gap-6 md:w-2/6">
          <div className="font-semibold text-whitesmoke">
            <Image
              src="/tech_affairs_logo.jpeg"
              alt="Tech Affairs Logo"
              width={80}
              height={80}
            />
          </div>
          <div className="text-center md:text-left text-whitesmoke">
            <p className="m-0 ml-0">
              Elevating Technology At IIITDM Kancheepuram
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 text-whitesmoke md:w-4/6 md:gap-10">
          {/* PC Version - Two Columns */}
          <div className="hidden md:flex md:flex-row md:gap-10">
            <div className="flex flex-col items-start gap-6 text-whitesmoke">
              <div className="font-semibold">Innovation Grant and Support</div>
              <a
                className="cursor-pointer"
                href="/pdfs/Advance_Request_Form.pdf"
                download="Advance_Request_Form.pdf"
              >
                Advance Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Budget_Request_Form.pdf"
                download="Budget_Request_Form.pdf"
              >
                Budget Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Reimbursement_Form.pdf"
                download="Reimbursement_Form.pdf"
              >
                Reimbursement Form
              </a>
            </div>

            <div className="flex flex-col items-start gap-6 text-whitesmoke">
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Advance_Settlement_Form.pdf"
                download="SA_Tech_Advance_Settlement_Form.pdf"
              >
                Advance Settlement Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf"
                download="SA_Tech_03_ASSEST_TRANSFER_FORM.pdf"
              >
                Asset Transform Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Non_Consumable_Indent.pdf"
                download="SA_Tech_Non_Consumable_Indent.pdf"
              >
                Non Consumable Indent Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Temporary_Advance_Form.pdf"
                download="SA_Tech_Temporary_Advance_Form.pdf"
              >
                Temporary Advance Form
              </a>
            </div>
          </div>

          {/* Mobile Version - Single Column */}
          <div className="md:hidden">
            <div className="flex flex-col items-start gap-6 text-whitesmoke">
              <div className="font-semibold">Innovation Grant and Support</div>
              <a
                className="cursor-pointer"
                href="/pdfs/Advance_Request_Form.pdf"
                download="Advance_Request_Form.pdf"
              >
                Advance Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Budget_Request_Form.pdf"
                download="Budget_Request_Form.pdf"
              >
                Budget Request Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/Reimbursement_Form.pdf"
                download="Reimbursement_Form.pdf"
              >
                Reimbursement Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Advance_Settlement_Form.pdf"
                download="SA_Tech_Advance_Settlement_Form.pdf"
              >
                Advance Settlement Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_03_ASSEST_TRANSFER_FORM.pdf"
                download="SA_Tech_03_ASSEST_TRANSFER_FORM.pdf"
              >
                Asset Transform Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_03_ASSET_TRANSFER_FORM.pdf"
                download="SA_Tech_Non_Consumable_Indent.pdf"
              >
                Non Consumable Indent Form
              </a>
              <a
                className="cursor-pointer"
                href="/pdfs/SA_Tech_Temporary_Advance_Form.pdf"
                download="SA_Tech_Temporary_Advance_Form.pdf"
              >
                Temporary Advance Form
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 text-whitesmoke">
            <div className="font-semibold">I2R MakerSpace</div>
            <a
              className="cursor-pointer"
              href="https://docs.google.com/document/d/1r8gTKgbhtiYPMCVVTHUTe97uFcEpFMG-e1pJwtALNEI/edit#heading=h.4hwppuotdne3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Form
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-white w-full" />
      <div className="text-center py-4 flex flex-col items-center justify-center lg:flex-row justify-between">
        <p className="text-xs sm:text-sm lg:text-base text-whitesmoke">
          © Technical Affairs IIITDM. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2">
          <button
            className="cursor-pointer bg-transparent text-white text-[15px] text-bold"
            onClick={openModal}
          >
            Disclaimer
          </button>
        </div>
        <DisclaimerModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="flex gap-4 mt-2">
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
