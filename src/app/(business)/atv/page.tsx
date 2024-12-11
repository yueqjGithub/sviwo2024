'use client'

import { FC, useRef } from "react";
import TopSection from "./top";
import OptionsSection from "./options";
// import MechineSection from "./mechine";
import ProtectionSection from "./protection";
// import PadSection from "./pad";
import AppSection from "./appSection";
import Image from "next/image";
// import styles from './page.module.scss'

const AtvPage: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const _showSecondSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // const [cur, setCur] = useState<number>(0)

  // const changeCur = (idx: number) => {
  //   setCur(idx)
  // }

  return (
    <>
      <TopSection goNextSection={_showSecondSection}></TopSection>
      <div className="w-full h-[108rem] md:h-screen relative md:overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory" id="atv_section_two" ref={sectionRef}>
        <OptionsSection></OptionsSection>
        {/* <MechineSection></MechineSection> */}
        <ProtectionSection></ProtectionSection>
        {/* <PadSection></PadSection> */}
        <AppSection></AppSection>
        <Image
          src={'/atv_6.png'}
          alt="atv_6"
          width={1920}
          height={1080}
          className="w-full h-[108rem] md:h-screen object-fill md:snap-center scroll-smooth"
        ></Image>
        {/* <Image
          src={'/atv_7.png'}
          alt="atv_6"
          width={1920}
          height={1080}
          className="w-full h-[108rem] md:h-screen object-cover"
        ></Image> */}
        <div className="w-full h-[108rem] md:h-screen bg-[#9D9D9D] md:snap-center scroll-smooth">
          <video src="/video1.mp4" muted controls={false} autoPlay={true} loop={true} className="w-full h-full object-cover"></video>
        </div>
        {/* controls */}
        {/* <div className={`absolute right-8 bottom-8 flex flex-row justify-center items-center w-24 h-24 rounded-full bg-[rgba(0,0,0,0.2)] cursor-pointer ${styles.testBg}`}
          onClick={() => {
            setCur(val => val < 6 ? val + 1 : 0)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div className={`absolute left-8 bottom-8 flex flex-row justify-center items-center w-24 h-24 rounded-full cursor-pointer rotate-180 ${styles.testBg}`}
          onClick={() => {
            setCur(val => val > 0 ? val - 1 : 6)
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div> */}
      </div>
    </>
  )
}

export default AtvPage