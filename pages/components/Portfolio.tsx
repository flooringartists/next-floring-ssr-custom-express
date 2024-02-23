import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { GiArmoredBoomerang } from "react-icons/gi";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";


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
    num: '1',
    img: '/img/floor1.png',
  },
  {
    num: '2',
    img: '/img/floor2.png',
  },
  {
    num: '3',
    img: '/img/floor3.png',
  },
  {
    num: '4',
    img: '/img/floor4.png',
  },
  {
    num: '5',
    img: '/img/floor5.png',
  },
  {
    num: '6',
    img: '/img/floor6.png',
  },
  {
    num: '7',
    img: '/img/floor7.png',
  },
  {
    num: '8',
    img: '/img/floor8.png',
  },
  {
    num: '9',
    img: '/img/floor9.png',
  },
  {
    num: '10',
    img: '/img/floor10.png',
  },
  {
    num: '11',
    img: '/img/floor11.png',
  },
  {
    num: '12',
    img: '/img/floor12.png',
  },
  {
    num: '13',
    img: '/img/floor13.png',
  },
  {
    num: '14',
    img: '/img/floor14.png',
  },
  {
    num: '15',
    img: '/img/floor15.png',
  },

]
// const Process2 = [
//   {
//     num: '2',
//     img: '/img/portfolio-1.png',
//   },
//   {
//     num: '3',
//     img: '/img/portfolio-2.png',
//   },
// ]
const Process4 = [
  {
    num: '1',
    img: '/img/Bathroom1.png',
  },
  {
    num: '2',
    img: '/img/Bathroom2.png',
  },
  {
    num: '3',
    img: '/img/Bathroom3.png',
  },
  {
    num: '4',
    img: '/img/Bathroom4.png',
  },
  {
    num: '5',
    img: '/img/Bathroom5.png',
  },
  {
    num: '6',
    img: '/img/Bathroom6.png',
  },
  {
    num: '7',
    img: '/img/Bathroom7.png',
  },
]
const Process5 = [

  {
    num: '3',
    img: '/img/Kitchen1.png',
  },
  {
    num: '4',
    img: '/img/Kitchen2.png',
  },
  {
    num: '5',
    img: '/img/Kitchen3.png',
  },
  {
    num: '6',
    img: '/img/Kitchen4.png',
  },
  {
    num: '7',
    img: '/img/Kitchen5.png',
  },
  {
    num: '8',
    img: '/img/Kitchen6.png',
  },
  {
    num: '9',
    img: '/img/Kitchen7.png',
  },
]
const Process6 = [

  {
    num: '1',
    img: '/img/Staircase1.png',
  },
  {
    num: '2',
    img: '/img/Staircase2.png',
  },
  {
    num: '3',
    img: '/img/Staircase3.png',
  },
  {
    num: '4',
    img: '/img/Staircase4.png',
  },
  {
    num: '5',
    img: '/img/Staircase5.png',
  },
  {
    num: '6',
    img: '/img/Staircase6.png',
  },
  {
    num: '7',
    img: '/img/Staircase7.png',
  },
  {
    num: '8',
    img: '/img/Staircase8.png',
  },
  {
    num: '9',
    img: '/img/Staircase9.png',
  },
  {
    num: '10',
    img: '/img/Staircase10.png',
  },
  {
    num: '11',
    img: '/img/Staircase11.png',
  },
  {
    num: '12',
    img: '/img/Staircase12.png',
  },
  {
    num: '13',
    img: '/img/Staircase13.png',
  },

]

export default function Tech() {
  const [tech, setTech] = useState(0);

  return (
    <>
      {/* technology*/}

      <div className=" space-y-10 xl:w-9/12 lg:w-11/12 w-11/12 mx-auto py-10">
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
          <span
            onClick={() => setTech(tech === 5 ? 0 : 5)}
            className={
              tech === 5
                ? "text-[#C1202F] underline border-[#C1202F]  px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
                : "border-[#C1202F] duration-300 trasition text-[#38383A] px-7 py-2.5 text-lg font-medium capitalize cursor-pointer"
            }
          >
            Staircase
          </span>
        </div>

        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 divide-x-1 md:gap-10 gap-6 relative py-6">
          {tech === 0 ? (
            <>
              {
                Process.map((elem) => {
                  const { img } = elem;
                  return (
                    <div data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="1000" className=" group inline-block py-4  overflow-hidden transition text-white duration-500" >
                      <div className="w-full relative">
                        <Image loader={uploadcareLoader}
                          unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
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

                    <div data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image loader={uploadcareLoader}
                          unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
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

                    <div data-aos="zoom-out-left" data-aos-delay="50" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image loader={uploadcareLoader}
                          unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
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

                    <div data-aos="zoom-out-left" data-aos-delay="50" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image loader={uploadcareLoader}
                          unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}
          {tech === 5 ? (
            <>
              {
                Process6.map((elem) => {
                  const { img } = elem;
                  return (

                    <div data-aos="zoom-out-left" data-aos-delay="50" data-aos-duration="1000" className=" group inline-block pb-4  overflow-hidden transition text-white duration-500 " >
                      <div className="w-full relative">
                        <Image loader={uploadcareLoader}
                          unoptimized={true} src={img} alt={img} width={500} height={500} className="group-hover:scale-105 transition-all duration-200 transform border-b border-[#C1202F]" />
                      </div>
                    </div>
                  )
                })
              }
            </>
          ) : null}

        </div>
        <div className="flex justify-center">
          <a href="/portfolio-details">
            <button className="bg-[#C1202F] flex justify-center text-center items-center space-x-2 font-bold rounded py-3 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-[#fff] transition-all">
              VIEW MORE COLLECTION <span className="pl-1"><GiArmoredBoomerang /></span>
            </button>
          </a>

        </div>
      </div>
    </>
  );
}
