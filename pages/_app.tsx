import "../styles/globals.css";
import "../styles/style.scss";
import React from "react";
import type { AppProps, } from "next/app";
import Footer from "./components/Footer";
import { BsChevronUp } from "react-icons/bs";


export const config = {
  unstable_runtimeJS: false,
};

function top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function MyApp({ Component, pageProps }: AppProps, props: any) {

  return (
    <main className="overflow-hidden">
      <Component {...pageProps} />
      <Footer />
      <div onClick={(top)} className="fixed bottom-4 right-4 lg:block hidden">
        <div className="p-3 relative inline-flex group items-center justify-center cursor-pointer bg-[#C1202F] overflow-hidden">
          <BsChevronUp className="transition-all duration-200 ease-out text-white" size={30} />
        </div>
      </div>
    </main>
  );
}
