'use client'

import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";


const ContactPage:FC = () => {
  const t = useTranslations('ContactPage')
  return (
    <div className="w-full relative">
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
      </div>
    </div>
  )
}

export default ContactPage
