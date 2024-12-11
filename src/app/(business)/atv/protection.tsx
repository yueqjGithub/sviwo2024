'use client'

import { FC, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from './page.module.scss'

const ProtectionSection: FC = () => {
  const t = useTranslations('Atv')
  const [cur, setCur] = useState<number>(0)
  return (
    <div className="w-full h-[108rem] md:h-screen bg-[#9D9D9D] overflow-hidden relative">
      {
        cur === 0 && (
          <div className="w-full h-full">
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
      {
        cur === 1 && (<div className="w-full h-full flex flex-row justify-center items-center bg-black text-white text-5xl font-bold">1</div>)
      }
      {
        cur === 2 && (<div className="w-full h-full flex flex-row justify-center items-center bg-black text-white text-5xl font-bold">2</div>)
      }
      {
        cur === 3 && (<div className="w-full h-full flex flex-row justify-center items-center bg-black text-white text-5xl font-bold">3</div>)
      }
      {
        cur === 4 && (<div className="w-full h-full flex flex-row justify-center items-center bg-black text-white text-5xl font-bold">4</div>)
      }
      {
        cur === 5 && (<div className="w-full h-full flex flex-row justify-center items-center bg-black text-white text-5xl font-bold">5</div>)
      }
      {
        cur === 6 && (<div className="w-full h-full flex flex-row justify-center items-center bg-black text-white text-5xl font-bold">6</div>)
      }
      {/* controls */}
      <div className={`absolute right-8 bottom-8 flex flex-row justify-center items-center w-24 h-24 rounded-full bg-[rgba(0,0,0,0.2)] cursor-pointer ${styles.testBg}`}
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
      </div>
    </div>
  )
}

export default ProtectionSection
