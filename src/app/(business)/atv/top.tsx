'use client'

import { FC } from "react";
// import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Sky from "./components/sky";

type Props = {
  goNextSection: () => void
}

const TopSection: FC<Props> = ({ goNextSection }) => {
  const t = useTranslations('Atv')
  return (
    <div className="w-full h-[108rem] md:h-screen relative overflow-hidden">
      {/* <Image
        alt="bg"
        src={'/start_bg.png'}
        width={1920}
        height={1080}
        className="w-full h-full"
        
      ></Image> */}
      <Sky></Sky>
      <div className="w-full h-full absolute top-0 left-0 flex flex-row justify-center items-center">
        {/* <Image
          alt="atv"
          src={'/atv_img.png'}
          className="w-[93rem] h-auto"
          width={928}
          height={699}
        ></Image> */}
        <div className="absolute flex flex-row justify-start items-center left-[10%] bottom-0 -translate-y-80">
          <div className="flex flex-col justify-start items-start">
            <motion.div initial={{ opacity: 0, x: '-100%' }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-white text-6xl mb-16"
            >
              {t('Section_1_slogan')}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
              className="text-white text-4xl px-8 py-4 bg-[#7A4EEE] flex flex-row justify-center items-center rounded-full active:scale-95 cursor-pointer hover:brightness-90"
              onClick={goNextSection}
            >
              {t('Section_1_go')}
            </motion.div>
          </div>
          <div className="w-[64rem]">
            <video src="/video3.mp4" autoPlay loop muted className="w-full h-auto left-1/2 top-1/2"></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSection
