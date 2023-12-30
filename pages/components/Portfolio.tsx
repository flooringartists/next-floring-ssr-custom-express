import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import AOS from 'aos';
// import 'aos/dist/aos.css';


const Process = [
  {
    num: '1',
    img: '/img/portfolio.png',
  },
  {
    num: '2',
    img: '/img/portfolio-1.png',
  },
  {
    num: '3',
    img: '/img/portfolio-2.png',
  },
  {
    num: '4',
    img: '/img/portfolio-3.png',
  },
  {
    num: '5',
    img: '/img/portfolio-4.png',
  },
  {
    num: '6',
    img: '/img/portfolio-5.png',
  },
]
const Process1 = [
  {
    num: '4',
    img: '/img/portfolio-3.png',
  },
  {
    num: '5',
    img: '/img/portfolio-4.png',
  },
]
const Process2 = [
  {
    num: '2',
    img: '/img/portfolio-1.png',
  },
  {
    num: '3',
    img: '/img/portfolio-2.png',
  },
]
const Process4 = [
  {
    num: '1',
    img: '/img/portfolio.png',
  },
  {
    num: '4',
    img: '/img/portfolio-3.png',
  },
  {
    num: '5',
    img: '/img/portfolio-4.png',
  },
]
const Process5 = [

  {
    num: '3',
    img: '/img/portfolio-2.png',
  },
  {
    num: '4',
    img: '/img/portfolio-3.png',
  },
  {
    num: '5',
    img: '/img/portfolio-4.png',
  },
  {
    num: '6',
    img: '/img/portfolio-5.png',
  },
]

export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}

      <div className=" space-y-10 xl:w-9/12 lg:w-11/12 w-11/12 mx-auto">
        <div className="py-4 space-y-3">
          <h2 className=" font-bold 2xl:text-4xl xl:text-3xl text-2xl text-[#C1202F] text-center xl:w-3/6 mx-auto">
            Our Portfolio
          </h2>
          {/* <p className="font-nomal text-base text-white text-center xl:w-3/6 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
        </div>
        {/* tabs */}
        <div className="flex items-center space-x-4 md:justify-center justify-start overflow-x-auto whitespace-nowrap ">
          <span
            onClick={() => setTech(tech === 0 ? 0 : 0)}
            className={
              tech === 0
                ? "text-[#C1202F] underline border-[#C1202F]  px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
                : "border-[#C1202F] duration-300 trasition text-[#38383A] px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
            }
          >
            All
          </span>
          <span
            onClick={() => setTech(tech === 1 ? 0 : 1)}
            className={
              tech === 1
                ? "text-[#C1202F] underline border-[#C1202F]  px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
                : "border-[#C1202F] duration-300 trasition text-[#38383A] px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
            }
          >
            Home
          </span>
          <span
            onClick={() => setTech(tech === 2 ? 0 : 2)}
            className={
              tech === 2
                ? "text-[#C1202F] underline border-[#C1202F]  px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
                : "border-[#C1202F] duration-300 trasition text-[#38383A] px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
            }
          >
            School
          </span>
          <span
            onClick={() => setTech(tech === 3 ? 0 : 3)}
            className={
              tech === 3
                ? "text-[#C1202F] underline border-[#C1202F]  px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
                : "border-[#C1202F] duration-300 trasition text-[#38383A] px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
            }
          >
            Bathroom
          </span>
          <span
            onClick={() => setTech(tech === 4 ? 0 : 4)}
            className={
              tech === 4
                ? "text-[#C1202F] underline border-[#C1202F]  px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
                : "border-[#C1202F] duration-300 trasition text-[#38383A] px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
            }
          >
            Kitchen
          </span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative p4-6">
          {tech === 0 ? (
            <>
              {
                Process.map((elem) => {
                  const { img } = elem;
                  return (
                    <div data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="1000" className=" group inline-block py-4  overflow-hidden transition text-white duration-500" >
                      <div className="w-full relative">
                        <Image src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}

          {tech === 1 ? (
            <>
              {
                Process1.map((elem) => {
                  const { img } = elem;
                  return (

                    <div data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden shadow hover:shadow-md  transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}

          {tech === 2 ? (
            <>
              {
                Process2.map((elem) => {
                  const { img } = elem;
                  return (

                    <div data-aos="zoom-in-left" data-aos-delay="50" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden shadow hover:shadow-md  transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}

          {tech === 3 ? (
            <>
              {
                Process4.map((elem) => {
                  const { img } = elem;
                  return (

                    <div data-aos="zoom-out-left" data-aos-delay="50" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden shadow hover:shadow-md  transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}
          {tech === 4 ? (
            <>
              {
                Process5.map((elem) => {
                  const { img } = elem;
                  return (

                    <div data-aos="zoom-out-left" data-aos-delay="50" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden shadow hover:shadow-md  transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
