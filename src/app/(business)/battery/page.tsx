import { FC } from "react";
import Image from "next/image";

const BatteryPage:FC = () => {
  return (
    <div className="w-full bg-[#ECEBEC] h-screen overflow-auto">
      <Image
        src={'/battery_img.png'}
        className="w-full h-auto md:h-screen block sticky top-0 z-10"
        alt="battery"
        width={1920}
        height={1080}
      ></Image>
      <Image
        src={'/battery2.png'}
        className="w-full h-auto md:h-screen block relative z-30"
        alt="battery"
        width={1920}
        height={1080}
      ></Image>
    </div>
  )
}

export default BatteryPage