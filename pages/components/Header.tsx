import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiPhoneCall } from "react-icons/fi";
import $ from 'jquery';
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
const Header = () => {

  const [showMe, setShowMe] = useState(true);
  const [active, setactive] = useState(1);

  function toggle() {
    setShowMe(!showMe);
  }
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.header').addClass('active');
      } else {
        $('.header').removeClass('active');
      }
    });
  }, []);
  return (

    <nav className="bg-[#D9D9D9]  z-20 header w-full">
      <header className="flex justify-between items-center  py-2 xl:w-9/12 lg:w-11/12 lg:px-0  md:px-8 px-4 mx-auto relative">
        <Link href="/" passHref={true}>
          <div className="flex items-center space-x-4 " >
            <Image width={160} height={160} className=" w-full" loader={uploadcareLoader}
              unoptimized={true} src="/img/logo.webp" priority alt="logo png " />
          </div>
        </Link>
        <div onClick={toggle} className="bg-[#c6c7be] p-2 rounded-md lg:hidden flex space-x-4 text-[#000]" id="show">
          <HiMenuAlt3 size={20} />
        </div>
        <div className={showMe ? "lg:flex hidden lg:static  absolute top-20 left-0 lg:w-auto w-full  items-center   space-x-8 lg:p-0 p-4 md:opacity-100 opacity-0 transition-all duration-300" : "lg:flex   lg:static bg-[#D9D9D9] absolute top-20 left-0 lg:w-auto w-full  items-center   space-x-8 lg:p-0 p-4 transition-all duration-300 opacity-100 z-20"} >
          <div className="flex lg:flex-row flex-col items-center lg:space-x-6 lg:space-y-0 space-y-3">
            <a onClick={() => { setactive(active === 1 ? 0 : 1); toggle }} href="#" className={`  transition-all duration-300 font-semibold ${active === 1 ? 'text-[#C1202F]' : 'text-[#000000] '}`}>Home </a>
            <a onClick={() => { setactive(active === 2 ? 0 : 2); toggle }} href="/#about" className={`  transition-all duration-300 font-semibold ${active === 2 ? 'text-[#C1202F]' : 'text-[#000000] '}`}>About us </a>
            <a onClick={() => { setactive(active === 3 ? 0 : 3); toggle }} href="/#service" className={`  transition-all duration-300 font-semibold ${active === 3 ? 'text-[#C1202F]' : 'text-[#000000] '}`}>Service </a>

            <a onClick={() => { setactive(active === 4 ? 0 : 4); toggle }} href="/#project" className={`  transition-all duration-300 font-semibold ${active === 4 ? ' text-[#C1202F]' : 'text-[#000000]'}`} >Project</a>
            <a onClick={() => { setactive(active === 5 ? 0 : 5); toggle }} href="/#testimonials" className={`  transition-all duration-300 font-semibold ${active === 5 ? ' text-[#C1202F]' : 'text-[#000000]'}`} >Testimonials</a>
            <a onClick={() => { setactive(active === 6 ? 0 : 6); toggle }} href="/#portfolio" className={`  transition-all duration-300 font-semibold ${active === 6 ? ' text-[#C1202F]' : 'text-[#000000]'}`} >Portfolio</a>
            <a href="tel:919376777446" className="px-6 flex items-center font-mono py-2 bg-[#C1202F] text-lg font-medium rounded text-white cursor-pointer">
              <span className="pr-1"> <FiPhoneCall /></span>+91-9376777446
            </a>
          </div>
        </div>
      </header>
    </nav>

  );
};

export default Header;

function setShowNav(arg0: boolean): void {
  throw new Error("Function not implemented.");
}