import { useEffect } from "react";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { log } from "console";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

export default function AdviceSection(
  // { AboutUs, myList }
) {



  const AboutUs =
  {
    head: 'About us ',
    heading: 'Think extensively, Design intelligently, Develop quickly.',
    ptag: 'Vuneco is an Indian web and mobile app development company that serves clients worldwide.Our company serves a variety of',
    imgSrc: '/img/About Us Page Graphics 02.png',
    imgW: 800,
    imgH: 700,
    altTag: 'One of the Fastest Way to Business Growth',
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section>
      <section className="py-10  bg-[#ffff] " id="about">
        <div className="items-center xl:w-9/12 lg:w-11/12 md:w-11/12 w-11/12 mx-auto lg:flex space-x-0 lg:space-x-20 md:space-y-0 ">
          <div className="w-full  bg-center bg-no-repeat py-20" style={{ backgroundImage: `url("/img/technology-reflective.webp")` }}>
            <div className="flex justify-center ">
              <Image
                className="rounded-md "
                alt={AboutUs.altTag}
                src={AboutUs.imgSrc}
                width={AboutUs.imgW}
                height={AboutUs.imgH}
                loader={uploadcareLoader}
                loading="eager"
                priority
                unoptimized={true}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/6 pb-10 lg:pb-0">

            <div className="w-full md:text-left py-6">
              <div className="space-y-4">
                <h1 className="text-[30px] font-bold text-[#000000]">About EDFT</h1>
                <p className="text-[#000000] text-[16px] font-[400]">Step into the cutting edge of financial innovation with the rising Emerging Daiki Finance Token (EDFT). As a premier financial technology firm we are dedicated to transforming the way people and businesses interact with the realm of finance. Our goal is to drive a fresh era of decentralized financial services, offering global users accessibility, security, and efficiency.</p>
              </div>
              <div className="py-6">
                <div className="flex justify-start items-start  space-x-4 rounded-lg">
                  <div className="p-2 rounded-lg">
                    <FiSettings className="text-[#000000] hover:text-[#000] transition-all duration-300" size={50} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[#000000] text-[18px] font-[600] ">
                    Innovative Solutions at Your Fingertips
                    </h3>
                    <p className="text-[16px] font-[400] text-[#000]">
                    At EDFT, we pride ourselves on delivering innovative solutions that redefine the financial landscape. Our cutting-edge technologies including blockchain integration and ethereum smart contracts, ensure that users experience a seamless and secure journey through decentralized finance. We're not just reshaping the future; we're placing the tools for financial empowerment directly into your hands.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-start items-start  space-x-4 rounded-lg">
                  <div className="p-2 rounded-lg">
                    <FaCoins className="text-[#000000] hover:text-[#000] transition-all duration-300" size={50} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[#000000] text-[18px] font-[600] ">
                    Global Impact, Local Empowerment
                    </h3>
                    <p className="text-[16px] font-[400] text-[#000]">
                    EDFT isn't just a global force, we're committed to local empowerment. By providing decentralized financial services, we break down barriers and bring financial accessibility to individuals and businesses worldwide. Our mission is to make a tangible difference in the way financial transactions occur, fostering a more inclusive and efficient global economy. With EDFT, financial empowerment knows no boundaries.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="py-8">
                <div className="bg-[#000000]  w-52">
                  <button type="button" className="text-[#fff] font-medium  text-[16px]  py-5 px-8 text-center inline-flex items-center hover:text-[#c6c7be]">
                    Get to know us
                    <span className="pl-2"> <BsArrowRight size={16} /></span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </section>

  );
}
