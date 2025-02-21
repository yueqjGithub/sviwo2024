'use client'

import { FC } from "react";
import TopSection from "./top";
import OptionsSection from "./options";
// import MechineSection from "./mechine";
import ProtectionSection from "./protection";
// import PadSection from "./pad";
import AppSection from "./appSection";
import Image from "next/image";
import styles from './page.module.scss'
import { motion } from "motion/react";

const AtvPage: FC = () => {

  const _showSecondSection = () => {
    const _target = document.getElementById('atv_section_two')
    if (_target) {
      _target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // const [cur, setCur] = useState<number>(0)

  // const changeCur = (idx: number) => {
  //   setCur(idx)
  // }

  return (
    <>
      <div className="w-full h-[108rem] md:h-screen relative md:overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory"
      >
        <TopSection goNextSection={_showSecondSection}></TopSection>
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
        <div className={`w-full h-[108rem] md:h-screen bg-[#9D9D9D] md:snap-center scroll-smooth flex flex-row justify-center items-center ${styles.lastBg}`}>
          <motion.div layout initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="w-1/3 rounded-[2rem] overflow-hidden drop-shadow-sm">
            <video playsInline={true} src="/video1.mp4" muted controls={false} autoPlay={true} loop={true} className="w-full h-auto object-cover"></video>
          </motion.div>
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