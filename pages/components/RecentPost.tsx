import React from "react";
import { useRouter } from "next/router";
import AOS from 'aos';
import CustomImage from "./CustomImage";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url,).then((res) => res.json()).then((res) => res.data.list)
export default function RecentPost() {
  const router = useRouter();
  const { data: finalData } = useSWR<any[]>("https://thegameofchains.com/api/v1/getBlogList?pageNo=1&size=11", fetcher);
  console.log('finalDatafinalDatafinalDatafinal', finalData);
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='lg:w-[30%] space-y-10'>
      <h2 className='text-2xl font-bold text-[#fff] '>Recent Posts</h2>
      <div className='space-y-10'>
        {
          finalData && finalData && finalData && finalData.length > 0 ?
            finalData.slice(0, 6).map((element: any, index: any
            ) => (
              <div
                onClick={() => router.push('/blog/' + element.titleurl)}
                key={index} className='items-center group cursor-pointer '>
                <div className='w-full xl:h-52 lg:h-64 h-60 relative object-cover' >
                  <CustomImage src={element && element.imageLinkUrl ? element.imageLinkUrl : "/images/defaultImage.png"} loader={uploadcareLoader} unoptimized={true} alt="imgs"
                    priority loading="eager" />
                </div>

                <h3 className='text-[#fff] text-lg font-medium line-clamp-3'>
                  {element && element.name ? element.name : null}
                </h3>

              </div>
            ))
            : null
        }
      </div>
    </div>
  )
}
function useEffect(arg0: () => void) {
  // throw new Error("Function not implemented.");
}

