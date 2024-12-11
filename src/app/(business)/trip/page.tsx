"use client"

import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import NavComp from "@/app/components/nav";

const TripPage: FC = () => {
  const t = useTranslations("Trip")
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <NavComp></NavComp>
      <Image
        alt="bg"
        src={'/start_bg.png'}
        className="w-full h-auto"
        width={1920}
        height={1080}
      ></Image>
      <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center pl-60 pr-20">
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} className="text-[4.8rem] text-white text-nowrap mb-24 tracking-widest">{t("Title")}</motion.div>
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1, ease: 'easeInOut' }}>
          <Image
            src={'/trip_img.png'}
            alt="trip"
            className="w-[141rem] h-auto"
            width={1411}
            height={553}
          ></Image>
        </motion.div>
      </div>
    </div>
  )
}

export default TripPage
