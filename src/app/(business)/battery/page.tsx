import { FC } from "react";
import Image from "next/image";
import NavComp from "@/app/components/nav";

const BatteryPage:FC = () => {
  return (
    <div className="w-full bg-[#ECEBEC] h-screen overflow-auto relative flex flex-col md:justify-start items-center justify-center">
      <NavComp></NavComp>
      <Image
        src={'/Battery_img.png'}
        className="w-full h-auto md:h-screen block sticky top-0 z-10"
        alt="battery"
        width={1920}
        height={1080}
      ></Image>
      <Image
        src={'/Battery2.png'}
        className="w-full h-auto md:h-screen block relative z-30"
        alt="battery"
        width={1920}
        height={1080}
      ></Image>
    </div>
  )
}

export default BatteryPage