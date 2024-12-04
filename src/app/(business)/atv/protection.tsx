'use client'

import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ProtectionSection: FC = () => {
  const t = useTranslations('Atv')
  return (
    <div className="w-full h-[108rem] md:h-screen bg-[#9D9D9D] overflow-hidden relative">
      <Image
        src={'/2_bg.png'}
        className="w-full h-full"
        width={1920}
        height={1080}
        alt="bg"
      ></Image>
      <div className="w-full h-full absolute top-0 left-0 flex flex-row justify-end items-center text-white pr-60">
        <div className="flex flex-col justify-center items-end">
          <div className="font-bold mb-8 text-8xl italic">{t('Section_4_label')}</div>
          <pre className="whitespace-pre-wrap text-5xl text-wrap leading-normal text-right">{t('Section_4_desc')}</pre>
        </div>
      </div>
    </div>
  )
}

export default ProtectionSection
