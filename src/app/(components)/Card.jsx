import Image from 'next/image';

const Card = ({ title, logo, links }) => {
  return (
    <div className="border border-solid border-black bg-gradient-to-r from-[#ACDDF9] to-[#879CFD] p-2 m-4 shadow-md flex flex-col items-center justify-center text-center  w-[250px] h-[229 px]">


        <div>
              {/* ClubLogo */}
                <div className="my-2 rounded-full overflow-hidden shadow-md transition-transform transform hover:scale-105">
                <Image src={logo} alt="Logo" width={100} height={100}/>
                </div>


                {/* ClubName */}
                <div className="mb-4">
                    <span className="text-sm text-gray-500 justify-center"> </span> 
                    <span className="text-sm font-semibold justify-center">{title}</span>
                </div>
                </div>

                {/*WhiteLine*/}
                <div className="my-2 left-0 w-full h-0.5 bg-white"></div>
        
            <div className='flex justify-between items-center  space-x-4'>
                {/* Instagram */}
                    <div className="flex justify-between w-full space-x-4">
                    <div>
                    <a href={links[0]} target="_blank" rel="noopener noreferrer">
                    <Image src= {"instagram.svg"} alt = "Instagram" width = {20} height={20}/>
                    </a>
                    </div>
                {/* LinkedIn*/}
                    <div>
                    <a href={links[1]} target="_blank" rel="noopener noreferrer">
                    <Image src= {"linkedin.svg"} alt = "Instagram" width = {20} height={20}/>
                    </a>
                    </div>

                {/* Youtube*/}
                    <div>
                    <a href={links[2]} target="_blank" rel="noopener noreferrer">
                    <Image src= {"youtube.svg"} alt = "Instagram" width = {20} height={20}/>
                    </a>
                    </div>

                {/* Browser */}
                    <div>
                    <a href={links[3]} target="_blank" rel="noopener noreferrer">
                    <Image src= {"browser.svg"} alt = "Instagram" width = {20} height={20}/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Card;
