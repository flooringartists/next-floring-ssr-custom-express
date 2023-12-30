import Link from "next/link";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { FaBitcoin, FaFacebookF, FaMedium, FaQuora, FaReddit, FaTelegram, FaTelegramPlane, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
export default function Footer() {

  const Contact = [
    {
      num: "1",
      icon: <FiFacebook size={24} />,
      url: "",

    },
    {
      num: "2",
      icon: <AiOutlineInstagram size={24} />,
      url: "",

    },
    {
      num: "3",
      icon: <FiTwitter size={24} />,
      url: "",

    },
    {
      num: "3",
      icon: <FaTelegram size={24} />,
      url: "",

    },
    {
      num: "3",
      icon: <FaTiktok size={24} />,
      url: "",

    },
    {
      num: "3",
      icon: <RiDiscordFill size={24} />,
      url: "",

    },

  ];
  const About = [
    {
      num: "1",
      title: "About Us",
      url: "",

    },
    {
      num: "1",
      title: "Why Us",
      url: "",

    },
    {
      num: "1",
      title: "Security",
      url: "",

    },
    {
      num: "1",
      title: "testimonials",
      url: "",

    }
  ];
  const Services = [
    {
      num: "1",
      title: "Custom Floor Design",
      url: "",

    },
    {
      num: "1",
      title: "Floor Installation",
      url: "",

    },
    {
      num: "1",
      title: "Refinishing and Restoration",
      url: "",

    },
    {
      num: "1",
      title: "Epoxy Flooring",
      url: "",

    }
  ];
  const Usefull = [
    {
      num: "1",
      title: "Ceramic Tiles",
      url: "",

    },
    {
      num: "1",
      title: "Natural Stone Tiles",
      url: "",

    },
    {
      num: "1",
      title: "Granite Tiles",
      url: "",

    },
    {
      num: "1",
      title: "Marble Tiles",
      url: "",

    }
  ];
  const ContactDetails = [
    {
      num: "1",
      icon: "",
      detail: "12354154156411",
      url: "",

    },
    {
      num: "2",
      icon: "",
      detail: "example@email.com",
      url: "",

    },
    {
      num: "2",
      icon: "",
      detail: "2464 Royal Ln. Mesa, New Jersey 45463",
      url: "",

    }
  ];

  return (
    <>
      {/* <div className=" w-full py-20 bg-[#333333]" id="foote">
        <footer className="grid grid-cols-1 lg:gap-4 gap-10 xl:w-9/12 lg:w-11/12 md:w-11/12 mx-auto lg:grid-cols-2 md:grid-cols-1 md::gap-10   lg:px-0 px-6 ">
          <div className=" space-y-8">
            <div className="flex lg:justify-start justify-center items-center space-x-2">
              <Link href="/" passHref={true}>
                <Image
                  src="/img/edft-logo.webp"
                  alt="DFTC-logo"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
            </div>
            <div className="flex lg:justify-start justify-center items-center space-x-2">
              <p className="text-base font-medium lg:pr-4 xl:w-5/6 xl:text-start text-center text-[#BEB8B6]">
                Stay ahead in the financial evolution with EDFT - Your gateway to decentralized finance. Join us on the journey towards a borderless, inclusive, and efficient financial future. Connect with us on social media for the latest updates and insights.
              </p>
            </div>
            <div className="flex lg:justify-start justify-center space-x-6 text-xl text-white/80 ">
              <Link href="/" passHref={true} target="_blank">
                <FaFacebookF className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <BsTwitter className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FiInstagram className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FaTelegramPlane className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FaYoutube className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FaMedium className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FaQuora className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FaBitcoin className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <FaReddit className="hover:text-[#c6c7be] cursor-pointer transition-all duration-150" />
              </Link>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-[34px] lg:text-[48px] font-[700] text-white lg:text-left text-center">
              Discover the Power of <span className="text-[#c6c7be]"> EDFT</span>
            </h2>
            <p className="text-white">Tap into the boundless possibilities of EDFT and usher in a fresh era of financial opportunities. Whether you're an individual seeking decentralized financial solutions or a business exploring innovative financial technologies, EDFT stands ready with the tools and expertise to drive you toward progress. Unleash the potential within EDFT and embark on a transformative journey where financial empowerment knows no bounds.</p>
            <div className="xl:flex items-center xl:space-x-6 space-y-3 xl:space-y-0 md:space-y-3 capitalize">
              <Link href="https://wallet.daikicoin.org/#/login" passHref={true} target="_blank">
                <div className="p-[2px] bg-[#c6c7be]  transition-all duration-500 ease-in-out">
                  <button className="w-full py-4 px-6 text-white text-lg font-bold  rounded btn bg-[#000000]">
                    Wallet {" "}
                  </button>
                </div>
              </Link>
              <Link href="/" passHref={true} target="_blank">
                <div className="p-[2px] bg-[#c6c7be]  transition-all duration-500 ease-in-out">
                  <button className="w-full py-4 px-6 text-white text-lg font-bold  rounded btn bg-[#000000]">
                    Web Wallet{" "}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <section className="bg-[#000000] py-4">
        <div className="flex lg:flex-row flex-col gap-4 justify-between items-center  py-8 text-sm  px-4 xl:w-9/12 lg:w-11/12 md:w-11/12 mx-auto md:px-0 ">
          <div className="flex justify-start font-medium space-x-4">
            <p className="text-[#fff]/80 cursor-pointer hover:text-[#c6c7be] transition-all duration-150">info@EDFT.org </p>
            <span className="text-white/20">|</span>
            <p className="text-[#fff]/80 cursor-pointer hover:text-[#c6c7be] transition-all duration-150">support@EDFT.org </p>
          </div>
          <div>
            <p className="text-[#fff]/80 text-sm font-medium capitalize">© 2022 EDFT. All Rights  <span className="text-[#c6c7be]">{""}Reserved.</span></p>
          </div>
        </div>
      </section> */}

      {/* <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">I'll return</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">I promise</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Reckless is he</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Emperor's Terms</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Pulverized?</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Corellia</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Bilbringi</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Fondor</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Through the Force</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Journey to the Emperor</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">Lord Vader ship approaching?</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="hover:underline text-gray-600 hover:text-[#C1202F]">X-wing class</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
      <div className="bg-[#D9D9D9]">
        <footer className="grid w-11/12 grid-cols-1 gap-4 py-10  lg:grid-cols-6 md:grid-cols-3 md::gap-10 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 border-b border-white/10">
          <div className="col-span-1 space-y-8 md:col-span-2">
            <Link href="/" passHref={true}>
              <div className="">
                <Image
                  src="/img/logo.png"
                  className=""
                  alt="home.png"
                  loader={uploadcareLoader}
                  unoptimized={true}
                  width={200}
                  height={200}
                />
              </div>
            </Link>
            <p className="text-sm lg:pr-4 xl:w-5/6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sunt! Odit fugit maxime vero. Optio consequuntur temporibus, modi ipsam sit perferendis quidem provident dolore incidunt animi! Culpa dolor nostrum tempore?</p>
            <div className="flex  space-x-4 md:justify-start">
              {Contact.map((elem) => {
                const { icon, url, num } = elem;
                return (
                  <a key={num}
                    aria-label="this is linkdin office app"
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-center w-10 h-10 duration-300 bg-[#C1202F] rounded-lg cursor-pointer  hover:bg-[#000000] text-white trasition"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 space-y-8 ">
            <p className="text-lg font-medium text-[#C1202F] whitespace-nowrap">
              About us
            </p>
            <div className="space-y-3 text-sm capitalize">
              {About.map((elem) => {
                const { title, url, num } = elem;
                return (
                  <div key={num} className="flex transition duration-150 cursor-pointer itmes-center ">
                    <Link href={url} passHref={true}>
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 space-y-8 ">
            <p className="text-lg font-medium text-[#C1202F] whitespace-nowrap">
              Our Services
            </p>
            <div className="space-y-3 text-sm capitalize">
              {Services.map((elem) => {
                const { title, url, num } = elem;
                return (
                  <div key={num} className="flex transition duration-150 cursor-pointer itmes-center ">
                    <Link href={url} passHref={true}>
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 space-y-8 ">
            <p className="text-lg font-medium text-[#C1202F] whitespace-nowrap">
              Usefull Links
            </p>
            <div className="space-y-3 text-sm capitalize">
              {Usefull.map((elem) => {
                const { title, url, num } = elem;
                return (
                  <div key={num} className="flex transition duration-150 cursor-pointer itmes-center ">
                    <Link href={url} passHref={true}>
                      {title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1 space-y-8 ">
            <p className="text-lg font-medium text-[#C1202F]">Contact Us</p>
            <div className="space-y-3 text-sm">
              {ContactDetails.map((elem) => {
                const { icon, url, num, detail } = elem;
                return (
                  <div key={num} className="flex space-x-2 itmes-center">
                    <span> {icon}</span>
                    <a href={url} > {detail}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </footer>
      </div>

    </>
  );
}
