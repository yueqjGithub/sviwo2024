'use client'

import { FC, useRef } from "react";
import TopSection from "./top";
import OptionsSection from "./options";
import MechineSection from "./mechine";
import ProtectionSection from "./protection";
import PadSection from "./pad";
import AppSection from "./appSection";
import Image from "next/image";

const AtvPage:FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const _showSecondSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <TopSection goNextSection={_showSecondSection}></TopSection>
      <div className="w-full h-[108rem] md:h-screen" id="atv_section_two" ref={sectionRef}>
        <OptionsSection></OptionsSection>
        <MechineSection></MechineSection>
        <ProtectionSection></ProtectionSection>
        <PadSection></PadSection>
        <AppSection></AppSection>
        <Image
          src={'/atv_6.png'}
          alt="atv_6"
          width={1920}
          height={1080}
          className="w-full h-[108rem] md:h-screen object-cover"
        ></Image>
        <Image
          src={'/atv_7.png'}
          alt="atv_6"
          width={1920}
          height={1080}
          className="w-full h-[108rem] md:h-screen object-cover"
        ></Image>
      </div>
    </>
  )
}

export default AtvPage