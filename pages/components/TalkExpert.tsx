import { useRouter } from "next/router"
import React from "react"

export default function TalkExpert() {
  const history = useRouter()
  return (
    <div className="bg-center bg-no-repeat bg-cover bg-[#f05454] py-10" >
      <section className="px-3 py-2 lg:py-20 container flex justify-center items-center mx-auto w-11/12 2xl:w-4/6 xl:w-5/6">
        <div className="space-y-6" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="3000">
          <h3 className="xl:text-[58px] text-center text-3xl font-[300px] text-white">Read to start something great?</h3>
          <p className="text-base text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <a href='/contact-us' className="border-2 border-white transition-all duration-500 ease-in-out hover:border-[#f05454] text-white px-10 py-3 text-lg flex justify-center items-center space-x-1 w-fit mx-auto font-semibold overflow-hidden relative group cursor-pointer">Contatc Us</a>
        </div>
      </section>
    </div>
  )
}
