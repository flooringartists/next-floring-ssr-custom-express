import React from "react";
import { HiMapPin } from "react-icons/hi2";
import ContactFrom from "./ContactFrom";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { BsDatabaseUp } from "react-icons/bs";
import { FiChevronRight, FiPhoneCall } from "react-icons/fi";
import { GoLocation, GoMail } from "react-icons/go";
import Link from "next/link";
export default function GetinTouch() {
  return (
    <div className="bg-[#000000]  py-20">
      <div className="lg:w-4/6  mx-auto flex flex-col justify-center items-center space-y-4">
        <h3 className="text-[46px] text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center font-extrabold transition-all duration-200  ">
          Contact
        </h3>
        <div className="flex justify-center items-center space-x-2">
          <Link href="/" passHref={true}>
            <button type="button" className="text-white font-[400px]  text-[20px]  text-center inline-flex items-center ">
              Home
            </button>
          </Link>
          <span className="text-gray-300"><FiChevronRight size={20} /></span>
          <button type="button" className="text-white font-[400px]  text-[20px]  text-center inline-flex items-center ">
            Contact
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 py-7 lg:py-10  md:space-y-0 space-y-6  px-4 w-11/12 mx-auto 2xl:w-4/6 xl:w-5/8 md:px-0">
        <div className="p-6 space-y-8 bg-[#ffffff]  transition-all duration-300 group hover:scale-x-105">
          <div className="w-full flex flex-col justify-center items-center space-y-4">
            <span className="text-[#0071BC]"> <FiPhoneCall size={80} /></span>
            <h3 className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center font-bold transition-all duration-200  ">
              CUSTOMER SERVICE
            </h3>
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center break-all transition duration-200 ease-in-out text-[16px] font-[400px]">
              +1 (234) 567 89 10
            </p>
          </div>
        </div>
        <div className="p-6 space-y-8 bg-[#ffffff]  transition-all duration-300 group hover:scale-x-105">
          <div className="w-full flex flex-col justify-center items-center space-y-4">
            <span className="text-[#0071BC]"> <GoMail size={80} /></span>
            <h3 className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center font-bold transition-all duration-200  ">
              MAIL ADDRESS
            </h3>
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center break-all transition duration-200 ease-in-out text-[16px] font-[400px]">
              example@example.com
            </p>
          </div>
        </div>
        <div className="p-6 space-y-8 bg-[#ffffff]  transition-all duration-300 group hover:scale-x-105">
          <div className="w-full flex flex-col justify-center items-center space-y-4">
            <span className="text-[#0071BC]"> <GoLocation size={80} /></span>
            <h3 className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center font-bold transition-all duration-200  ">
              OFFICE
            </h3>
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center break-all transition duration-200 ease-in-out text-[16px] font-[400px]">
              Yeşilpınar Mh. Tepe Sk. Eyüp İstanbul
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 w-11/12 mx-auto 2xl:w-4/6 xl:w-5/8 md:px-0 py-7 lg:py-10">
        <ContactFrom />
      </div>
    </div>
  );
}
