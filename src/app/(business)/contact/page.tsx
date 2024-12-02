'use client'

import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";
import { motion } from "motion/react";


const ContactPage: FC = () => {
  const t = useTranslations('ContactPage')
  return (
    <div className="w-full h-screen relative">
      <Image
        alt="bg"
        src={'/start_bg.png'}
        className="w-full h-auto"
        width={1920}
        height={1080}
      ></Image>
      <div className="absolute left-0 top-0 w-full h-full flex flex-row justify-between items-center pl-60 pr-20">
        <div className="flex flex-col justify-start items-start w-max">
          <div className="text-[4.8rem] text-white text-nowrap mb-32 tracking-widest">{t("DescTitle")}</div>
          <div className="max-w-[54rem] whitespace-pre-wrap break-word leading-loose tracking-widest text-white text-[2.2rem]">{t("Desc")}</div>
        </div>
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: '100%', opacity: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} className="flex-1 flex flex-col justify-end items-center h-full" layout>
          <div className="flex flex-col justify-start items-center relative bg-[#010001] rounded-2xl pb-[8.8rem] pt-[26rem] px-14">
            <Image
              src={'/contact_image1.png'}
              alt="car"
              className="w-[80rem] h-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] max-w-7xl"
              width={807}
              height={428}
            ></Image>
            <div className="flex flex-col justify-start items-center text-2xl text-white w-[50rem]">
              <div className="flex-row flex-jst-start items-center py-4 px-12 bg-[#B3B3B3] rounded-2xl w-[50rem] mb-11 flex">
                <div className="flex-1 flex flex-row justify-end items-center mr-[2rem]">{t('Email')}:</div>
                <input type="text" className="block flex-5 appearance-none text-white bg-transparent outline-none" />
              </div>
              <div className="flex-row flex-jst-start items-start py-4 px-12 bg-[#B3B3B3] rounded-2xl w-[50rem] mb-11 flex">
                <div className="flex-1 flex flex-row justify-end items-center mr-[2rem]">{t('Message')}:</div>
                <textarea name="message" rows={8} className="block flex-5 resize-none appearance-none text-white bg-transparent outline-none"></textarea>
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <div className="py-2 px-5 rounded-full bg-[#7A4EEE] text-white font-semibold text-2xl">{t('Send')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
