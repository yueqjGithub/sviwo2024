import { FC } from "react";
import Image from "next/image";
import Volt from "./volt";
import FeatureSection from "./feature";
import IntroSection from "./intro";
import NavComp from "@/app/components/nav";

const GolfPage:FC = () => {
  return (
    <div className="w-full relative">
      <NavComp></NavComp>
      <Image
        alt="golf"
        src={'/golf_bg.png'}
        width={1920}
        height={1080}
        className="w-full h-[108rem]"
      ></Image>
      <Volt></Volt>
      <FeatureSection></FeatureSection>
      <IntroSection></IntroSection>
    </div>
  )
}

export default GolfPage
