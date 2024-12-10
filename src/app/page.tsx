'use client'

import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { MENUS } from "./constant";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import LangSwitch from "./components/langSwitch";

const menuVariants = {
  open: (idx: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.1 + 0.5
      }
    }
  }
}

const IndexPage: FC = () => {
  const t = useTranslations('Menu')
  const [hover, setHover] = useState<typeof MENUS[number]>()
  const route = useRouter()
  return (
    <div className="w-screen h-screen bg-[#0091DA] relative">
      <Image
        className={`w-full h-full`}
        src={'/index_bg.png'}
        alt="index_bg"
        width={1920}
        height={1080}
      ></Image>
      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-start items-center">
        <div className="w-full px-[45rem] pt-[4.5rem] flex flex-row justify-around items-center">
          {
            MENUS.map((item, idx) => (<motion.div key={item} custom={idx} className='text-white text-[2.8rem] flex-1 flex flex-row justify-center'
              variants={menuVariants} initial={{ opacity: 0, y: 100 }} animate="open" onMouseEnter={() => { setHover(item) }} onMouseLeave={() => { setHover(undefined) }}
            >
              <div className="flex flex-col justify-start items-center w-max cursor-pointer" onClick={() => { route.push(`/${item.toLowerCase()}`) }}>
                <div className="pb-3">{item === 'Contact' ? t('Contact') : item}</div>
                {
                  hover === item ? (
                    <motion.div className="w-full h-1 bg-white" layoutId="underline" animate={{ opacity: 1 }} initial={{ opacity: 0 }}/>
                  ) : (<div className="h-1"></div>)
                }
              </div>
            </motion.div>))
          }
          <motion.div layout className="flex-1 flex flex-row justify-end items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <LangSwitch currentColor="#fff"></LangSwitch>
          </motion.div>
        </div>
        <div className="flex-1 w-full flex flex-row justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div className='w-1/4' layout animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} initial={{ opacity: 0, y: 100 }}>
            <Image
              src={'/logo.png'}
              className="w-full"
              width={658}
              height={169}
              alt="logo"
            ></Image>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage