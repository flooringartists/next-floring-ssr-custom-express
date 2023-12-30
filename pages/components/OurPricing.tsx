import Link from "next/link";
import { BsDatabaseUp, BsFillCheckCircleFill } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
import { RiMedalLine } from "react-icons/ri";
export default function HireSection() {
    // const data = Hire;
    // if (!data) {
    //     return <div>Loading...</div>;
    // }

    const Services = [
        {
            num: "1",
            url: "/",
            type: "IT Support",
            price: "10",
            $: "$",
            month: "Mo",
            p1: "Free Security Service",
            p2: "1x Security Service",
            p3: "Unlimited Security Service",
            p4: "1x Dashboard Access",
            p5: "3x Job Listings"
        },
        {
            num: "2",
            url: "/",
            type: "Cloud Service",
            price: "40",
            $: "$",
            month: "Mo",
            p1: "Free Security Service",
            p2: "1x Security Service",
            p3: "Unlimited Security Service",
            p4: "1x Dashboard Access",
            p5: "3x Job Listings"
        },
        {
            num: "3",
            url: "/",
            type: "Server Vertualization",
            price: "77",
            $: "$",
            month: "Mo",
            p1: "Free Security Service",
            p2: "1x Security Service",
            p3: "Unlimited Security Service",
            p4: "1x Dashboard Access",
            p5: "3x Job Listings"
        }
    ];

    return (
        <section className="text-gray-400 body-font overflow-hidden bg-[#000000]">
            <div className="w-11/12 mx-auto 2xl:w-4/6 xl:w-5/6 py-20">
                <div className="lg:w-4/6  mx-auto flex flex-col justify-center items-center space-y-4">
                    <span className="text-[#0071BC]"> <RiMedalLine size={80} /></span>
                    <h3 className="text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-[#0071BC] to-[#29ABE2] text-center font-bold transition-all duration-200  ">
                        Special Packs
                    </h3>
                    <p className="text-white text-[16px] font-[400] text-center break-all transition duration-200 ease-in-out">
                        Select pricing plan to get more
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 py-10">
                    {Services.map((elem) => {
                        const { type, p1, p2, p3, p4, p5 } = elem;
                        return (
                            <div className="w-full bg-gradient-to-r from-[#0071BC] to-[#29ABE2] duration-500  ">
                                <div className="h-full flex flex-col relative overflow-hidden">
                                    <div className=" mx-auto py-3">
                                        <span className="text-[#fff]"> <RiMedalLine size={80} /></span>
                                        <h2 className="text-xl font-semibold  text-[#fff]">{type}</h2>
                                    </div>
                                    <p className="text-center text-[#fff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat magni eum quia </p>

                                    <div className="py-8">
                                        {/* <h3 className="text-white font-semibold leading-none text-center">
                                            <span className="text-xl">{$}</span>
                                            <span className="text-5xl">{price}</span>
                                            <span className="text-lg">/{month}</span>
                                        </h3> */}
                                    </div>
                                    <div className="flex justify-center items-center p-6 bg-white">
                                        <div className="space-y-6 divide-y divide-[#0071BC]">
                                            <p className="text-center text-black">{p1}</p>
                                            <p className="text-center text-black">{p2}</p>
                                            <p className="text-center text-black">{p3}</p>
                                            <p className="text-center text-black">{p4}</p>
                                            <p className="text-center text-black">{p5}</p>
                                            {/* <button className="flex items-center mx-auto text-white bg-[#6362E5] py-2 px-6 w-auto">Buy Now</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
