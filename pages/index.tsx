import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { BsDatabaseUp } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "./components/Testimonials";
import  We from "../public/img/client4.png"
import { FiPhoneCall } from "react-icons/fi";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";


const AboutUsSection = dynamic(() => import('./components/AboutUs'), {
  loading: () => <p>Loading...</p>,
})

const Portfolio = dynamic(() => import('./components/Portfolio'), {
  loading: () => <p>Loading...</p>,
})
const Header = dynamic(() => import('./components/Header'), {
  loading: () => <p>Loading...</p>,
})

const Service = [
  {
    num: "1",
    img: "/img/service-1.png",
    title: "Installing Vinyl Plank Flooring",
    decs: "Elevate your space with modern vinyl plank flooring. Our expert installation ensures a seamless finish, seamlessly blending aesthetic beauty and practical functionality for a stylish and functional upgrade."
  },
  {
    num: "2",
    img: "/img/service-2.png",
    title: "Underfloor Heating",
    decs: "Indulge in ultimate comfort with our underfloor heating solutions. We seamlessly integrate heating systems beneath your floors, ensuring warmth and coziness for your living or working space."
  },
  {
    num: "3",
    img: "/img/service-3.png",
    title: "Building with a Metal Staircase",
    decs: "Elevate your interior with a contemporary touch through our metal staircase constructions. Our skilled craftsmen bring your vision to life, creating stunning and sturdy metal staircases tailored to your space."
  }
]

export default function Home(props: any) {
  let { initialData } = props;
  const [typedText] = useState("");


  const [show, setshow] = useState(true);

  return (
    <>
      <Head>
        <title>Floring Artist - Floring Artist.com</title>
      </Head>
      <div className="overflow-hidden">
        <Header />
        <div className="py-36 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: `url("/img/hero-section.png")` }}>
          <div className="container m-auto text-center px-6 opacity-100 py-20">
            <h2 className="text-4xl font-bold mb-2 text-[#C1202F]">Flooring Artists</h2>
            <h3 className="text-2xl mb-8 text-[#000]">Choose The Right Flooring
              Option for Your Home</h3>
            <a href="tel:919376777446"  className=" justify-center  flex items-center font-mono ">
            <button className="bg-[#C1202F] inline-flex items-center space-x-2 font-bold rounded py-3 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-[#fff] transition-all">
            <span className="pr-1"> <FiPhoneCall /></span>+919376777446
              </button>
            </a>



            {/* <a href="tel:9876543210"  className="px-6 flex items-center font-mono py-2 bg-[#C1202F] text-lg font-medium rounded text-white cursor-pointer">
            <span className="pr-1"> <FiPhoneCall /></span>9876543210
            </a> */}
          </div>
        </div>

        <section className="xl:w-9/12 lg:w-11/12 w-11/12 mx-auto py-10">
          <div className="lg:flex  mb-20 w-full lg:space-y-0 space-y-6" id="about">
            <div className="w-full space-y-4 pr-10">
              <h3>Who we are</h3>
              <h4 className="md:text-3xl text-2xl	 text-[#C1202F] font-bold ">Welcome to Flooring Artists - Your Premier Destination for Exceptional Flooring & Paving Services!</h4>
              <p className="text-gray-600 mb-8">Welcome to Flooring Artists, your premier destination for exceptional flooring and paving services! At Flooring Artists, we are committed to elevating spaces through our top-notch craftsmanship. Our skilled artisans and craftsmen take pride in delivering excellence in every project, ensuring that your floors transcend mere surfaces to become statements of style and durability. With a dedication to quality and precision, we transform your vision into reality. Whether you seek timeless elegance, modern appeal, or a touch of luxury, Flooring Artists is your trusted partner in creating spaces that leave a lasting impression. Experience the difference with our unparalleled services, where every detail matters, and every floor becomes a masterpiece. Welcome to a world of craftsmanship, style, and enduring quality at Flooring Artists!</p>
              <div>
                {/* <button className="bg-[#C1202F] font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-[#fff] transition-all">Ask For a Question</button> */}
            <a href="tel:919376777446"  className="flex items-center font-mono ">
            <button className="bg-[#C1202F] inline-flex items-center space-x-2 font-bold rounded py-3 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-[#fff] transition-all">
            <span className="pr-1"> <FiPhoneCall /></span>+919376777446
              </button>
            </a>
              </div>
            </div>
            <div className="w-full ">
           {/* <img className="rounded-lg" src="/img/client4.png"  loader={uploadcareLoader}
                  unoptimized={true}  alt="Who we are" width={600} height={500} /> */}
                 <Image className="rounded-lg" width={600} height={500}  loader={uploadcareLoader} unoptimized={true} src="/img/who-we-are.png" priority alt="Who we are" />
            </div>
          </div>
          <section className="py-10" id="service">
            <h2 className="md:text-3xl text-2xl text-[#C1202F] text-center font-bold mb-3">We Services Offered</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 py-10">
              {Service.map((elem) => {
                const { title, img, decs } = elem;
                return (
                  <div className="p-4 space-y-2 border rounded">
                    <div>
                      <Image  loader={uploadcareLoader}
                  unoptimized={true} src={img} alt={""} width={400} height={200} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-[#C1202F]">{title}</h2>
                      <p className="text-base">{decs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="lg:space-y-6 space-y-6" id="project">
            <div className="bg-[#D9D9D9]">
              <div className="flex items-center justify-center py-6">
                <h2 className="md:text-3xl text-2xl text-[#C1202F] font-bold mb-0">Latest Projects</h2>
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2 lg:pr-10">
                <h4 className="md:text-3xl text-2xl text-[#C1202F]  font-bold mb-3">Ceramic Floor Tiles</h4>
                <p className="text-gray-600 mb-8">Embark on a journey of timeless elegance with our ceramic floor tiles showcased in our latest projects. Whether you prefer classic designs or modern patterns, our installations bring versatility and durability to every corner of your home or business. Elevate your space with the enduring beauty and practicality of ceramic tiles, meticulously crafted by Flooring Artists for a touch of sophistication that lasts.
</p>
                <div className="flex flex-col space-y-3">
                <a href="/portfolio-details" >
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-[#C1202F]  hover:text-[#fff] transition-all">View Collection</button></a>
                 
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image className="" loader={uploadcareLoader}
                  unoptimized={true} src="/img/project-1.webp" alt="Syncing" width={650} height={700} />
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2">
                <Image loader={uploadcareLoader}
                  unoptimized={true} className="" src="/img/project-2.webp" alt="Syncing" width={650} height={700} />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10">
                <h4 className="md:text-3xl text-2xl text-[#C1202F] font-bold mb-3">Natural Stone Flooring
</h4>
                <p className="text-gray-600 mb-8">Immerse yourself in the luxury of natural stone flooring featured in our recent projects. Our expertise in working with diverse natural stones guarantees a sophisticated and enduring foundation for your space. Experience the timeless beauty and resilience of natural stone, expertly crafted by Flooring Artists for an opulent and lasting impression in your surroundings. </p>
                <div className="flex flex-col space-y-3">
                <a href="/portfolio-details">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-[#C1202F] hover:text-[#fff] transition-all">View Collection</button></a>
                
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2 lg:pr-10">
                <h4 className="md:text-3xl text-2xl text-[#C1202F] font-bold mb-3">Marble Floor Tiles</h4>
                <p className="text-gray-600 mb-8">Experience the epitome of opulence with our marble floor tile installations. Our meticulous craftsmanship enhances the innate beauty of marble, fashioning a luxurious ambiance that captivates the senses. At Flooring Artists, we specialize in creating spaces that exude sophistication, combining the timeless allure of marble with our commitment to unparalleled artistry, delivering an exquisite and captivating flooring solution for your distinguished taste. </p>
                <div className="flex flex-col space-y-3">
                <a href="/portfolio-details">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-[#C1202F] hover:text-[#fff] transition-all">View Collection</button></a>
                
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image loader={uploadcareLoader}
                  unoptimized={true} className="" src="/img/project-3.webp" alt="Syncing" width={650} height={700} />
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2">
                <Image loader={uploadcareLoader}
                  unoptimized={true} className="" src="/img/project-4.webp" alt="Syncing" width={650} height={700} />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10">
                <h4 className="md:text-3xl text-2xl text-[#C1202F] font-bold mb-3">Thickness Of Marble Flooring</h4>
                <p className="text-gray-600 mb-8">Discover the significance of marble floor thickness and its pivotal role in enhancing the longevity and durability of your flooring. At Flooring Artists, we offer valuable insights and recommendations, empowering you to make informed decisions for your project. Our expertise ensures that the thickness of your marble flooring aligns perfectly with your vision, guaranteeing a lasting investment that exudes both aesthetic charm and structural resilience. Trust us to guide you towards a flooring solution that stands the test of time. </p>
                <div className="flex flex-col space-y-3">
                <a href="/portfolio-details">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-[#C1202F] hover:text-[#fff] transition-all">View Collection</button></a>
                
                </div>
              </div>
            </div>
          </section>
        </section>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
      </div>
    </>
  );
}
