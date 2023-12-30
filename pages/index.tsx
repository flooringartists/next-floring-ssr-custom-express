import { useState } from "react";
import React from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { BsDatabaseUp } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import Testimonials from "./components/Testimonials";

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
    title: "Custom Floor Design",
    decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facilis repellendus quos nisi laboriosam incidunt enim facere? Soluta deserunt, aperiam dolor possimus ipsam architecto fuga et ut incidunt maxime eaque."
  },
  {
    num: "2",
    img: "/img/service-2.png",
    title: "Custom Floor Design",
    decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facilis repellendus quos nisi laboriosam incidunt enim facere? Soluta deserunt, aperiam dolor possimus ipsam architecto fuga et ut incidunt maxime eaque."
  },
  {
    num: "3",
    img: "/img/service-3.png",
    title: "Custom Floor Design",
    decs: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facilis repellendus quos nisi laboriosam incidunt enim facere? Soluta deserunt, aperiam dolor possimus ipsam architecto fuga et ut incidunt maxime eaque."
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
            <h2 className="text-4xl font-bold mb-2 text-[#C1202F]">Sanding & Timber Flooring</h2>
            <h3 className="text-2xl mb-8 text-[#000]">Choose The Right Flooring
              Option for Your Home</h3>
            <button className="bg-[#C1202F] font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-[#fff] transition-all">Book Now</button>
          </div>
        </div>

        <section className="xl:w-9/12 lg:w-11/12 w-11/12 mx-auto py-10">
          <div className="md:flex  mb-20 w-full md:space-y-0 space-y-6" id="about">
            <div className="w-full space-y-4 pr-10">
              <h3>Who we are</h3>
              <h4 className="md:text-4xl text-2xl text-[#C1202F] font-bold mb-3">Welcome to Our Flooring
                & Paving Services</h4>
              <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eius consectetur. Exercitationem reprehenderit labore iure consequatur illo molestiae perferendis obcaecati magnam nisi odit vitae veritatis, expedita, doloribus quaerat est. Facilis velit, earum voluptatum totam, maxime dolor quisquam porro corrupti quas dicta ullam doloremque itaque, harum voluptate. Laborum tenetur distinctio quia fugit aperiam consequatur modi ullam provident, ad dolor, omnis odit. Totam beatae voluptatem minima, nihil cum vitae ad repudiandae modi est officiis ut consequatur temporibus voluptas impedit, quia ducimus. Hic magni illo explicabo nisi dolorum culpa suscipit ipsam omnis incidunt mollitia quia autem earum tempore eos pariatur, voluptas tempora quidem error quis, sint obcaecati? Quos assumenda sapiente laboriosam nostrum ducimus alias in omnis? Praesentium magnam velit necessitatibus, nisi, officiis autem reprehenderit earum iusto molestias deleniti nihil quod cumque voluptatem ut recusandae, hic reiciendis minus cum consectetur quisquam! Veritatis iste sint est. Debitis ea ullam doloremque excepturi ducimus quia et distinctio eius, rerum eum accusamus recusandae deleniti soluta autem dolores vel?</p>
              <div>
                <button className="bg-[#C1202F] font-bold rounded py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent text-[#fff] transition-all">Ask For a Question</button>
              </div>
            </div>
            <div className="w-full ">
              <Image className="rounded-lg" src="/img/who-we-are.png" alt="Who we are" width={600} height={500} />
            </div>
          </div>
          <section className="py-10" id="service">
            <h2 className="md:text-4xl text-2xl text-[#C1202F] text-center font-bold mb-3">We Services Offered</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 py-10">
              {Service.map((elem) => {
                const { title, img, decs } = elem;
                return (
                  <div className="p-4 space-y-2 border rounded">
                    <div>
                      <Image src={img} alt={""} width={400} height={200} />
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
                <h2 className="md:text-4xl text-2xl text-[#C1202F] font-bold mb-3">Latest Projects</h2>
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2 lg:pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Ceramic Tiles</h4>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum voluptatem iure libero obcaecati illum nemo at, saepe adipisci optio ducimus ratione. Nobis aliquid optio recusandae cum, vel minus ut, incidunt voluptatum quasi possimus veritatis consequatur eaque maiores. Sequi quidem ducimus, magnam, accusantium reprehenderit corrupti vitae ad saepe ab nobis, sit consectetur soluta. Quas repellendus maiores veniam nobis harum saepe quaerat. Temporibus ex aliquam, quos praesentium quasi vel, doloremque, sunt accusamus velit molestias </p>
                <div className="flex flex-col space-y-3">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image className="" src="/img/project-1.webp" alt="Syncing" width={650} height={700} />
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2">
                <Image className="" src="/img/project-2.webp" alt="Syncing" width={650} height={700} />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Natural Stone Tiles</h4>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum voluptatem iure libero obcaecati illum nemo at, saepe adipisci optio ducimus ratione. Nobis aliquid optio recusandae cum, vel minus ut, incidunt voluptatum quasi possimus veritatis consequatur eaque maiores. Sequi quidem ducimus, magnam, accusantium reprehenderit corrupti vitae ad saepe ab nobis, sit consectetur soluta. Quas repellendus maiores veniam nobis harum saepe quaerat. Temporibus ex aliquam, quos praesentium quasi vel, doloremque, sunt accusamus velit molestias </p>
                <div className="flex flex-col space-y-3">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2 lg:pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Granite Tiles</h4>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum voluptatem iure libero obcaecati illum nemo at, saepe adipisci optio ducimus ratione. Nobis aliquid optio recusandae cum, vel minus ut, incidunt voluptatum quasi possimus veritatis consequatur eaque maiores. Sequi quidem ducimus, magnam, accusantium reprehenderit corrupti vitae ad saepe ab nobis, sit consectetur soluta. Quas repellendus maiores veniam nobis harum saepe quaerat. Temporibus ex aliquam, quos praesentium quasi vel, doloremque, sunt accusamus velit molestias </p>
                <div className="flex flex-col space-y-3">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image className="" src="/img/project-3.webp" alt="Syncing" width={650} height={700} />
              </div>
            </div>
            <div className="flex items-center flex-wrap lg:space-y-0 space-y-4">
              <div className="w-full lg:w-1/2">
                <Image className="" src="/img/project-4.webp" alt="Syncing" width={650} height={700} />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Marble Tiles</h4>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum voluptatem iure libero obcaecati illum nemo at, saepe adipisci optio ducimus ratione. Nobis aliquid optio recusandae cum, vel minus ut, incidunt voluptatum quasi possimus veritatis consequatur eaque maiores. Sequi quidem ducimus, magnam, accusantium reprehenderit corrupti vitae ad saepe ab nobis, sit consectetur soluta. Quas repellendus maiores veniam nobis harum saepe quaerat. Temporibus ex aliquam, quos praesentium quasi vel, doloremque, sunt accusamus velit molestias </p>
                <div className="flex flex-col space-y-3">
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
                  <button className="hover:bg-[#C1202F] font-bold rounded py-4 px-8  uppercase tracking-wider border text-black hover:text-[#fff] transition-all">View Collection</button>
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
