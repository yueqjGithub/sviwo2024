import { FC } from "react";
import Image from "next/image";
import Volt from "./volt";

const GolfPage:FC = () => {
  return (
    <div className="w-full">
      <Image
        alt="golf"
        src={'/golf_bg.png'}
        width={1920}
        height={1080}
        className="w-full h-[108rem] md:h-screen"
      ></Image>
      <Volt></Volt>
      <div className="w-full h-screen"></div>
    </div>
  )
}

export default GolfPage
