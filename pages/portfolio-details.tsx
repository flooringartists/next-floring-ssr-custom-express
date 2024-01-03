import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { GiArmoredBoomerang } from "react-icons/gi";
import Header from "./components/Header"
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

export default function Tech() {
  const [tech, setTech] = useState(0);


  const GraniteTiles = [
    {
      number: '1',
      img: '/img/floor1.png',
    },
    {
      number: '2',
      img: '/img/floor2.png',
    },
    {
      number: '3',
      img: '/img/floor3.png',
    },
    {
      number: '3',
      img: '/img/floor4.png',
    },
  ]




  return (
    <>
      <div className="overflow-hidden">

        <Header />
        <div className=" space-y-10 xl:w-9/12  lg:w-11/12 w-11/12 mx-auto py-20 mt-8">
          <div className="py-4 space-y-3">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#C1202F] text-center xl:w-3/6 mx-auto">
              Our Portfolio
            </h2>


            <div className=" py-10">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#C1202F] xl:w-3/6 ">
             Granite Tiles
            </h2>  
            <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-2 divide-x-1 md:gap-10 gap-6 relative py-0">
            <>
              {
               GraniteTiles.map((elem) => {
                  const { img } = elem;
                  return (
                    <div data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="1000" className=" group inline-block py-4  overflow-hidden transition text-white duration-500" >
                      <div className="w-full relative">
                        <Image  loader={uploadcareLoader}
                  unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </> 
            </div>
            </div>

            {/* ...........  */}

            <div className=" py-2">
            <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#C1202F] xl:w-3/6 ">
            Marble Tiles
            </h2>  
            <div className="grid  lg:grid-cols-4 md:grid-cols-3 grid-cols-2 divide-x-1 md:gap-10 gap-6 relative py-0">
            <>
              {
               GraniteTiles.map((elem) => {
                  const { img } = elem;
                  return (
                    <div data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="1000" className=" group inline-block py-4  overflow-hidden transition text-white duration-500" >
                      <div className="w-full relative">
                        <Image  loader={uploadcareLoader}
                  unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </> 
            </div>
            </div>






          </div>



        </div>
      </div>

    </>
  );
}
