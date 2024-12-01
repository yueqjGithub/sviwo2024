'use client'

import { FC, useState } from "react";
import Image from "next/image";
import { MENUS } from "../constant";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

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

const BuisinessLayout:FC<Readonly<{
  children: React.ReactNode;
}>> = ({
  children,
}) => {
  const t = useTranslations('Menu')
  const [hover, setHover] = useState<typeof MENUS[number]>()
  const route = useRouter()
  const pathname = usePathname()

  return (
    <div className="w-full">
      <div className="w-full absolute top-0 z-20 flex flex-row justify-start items-center pl-60 pt-[4.5rem]">
        <Image
          src={'/logo.png'}
          alt="logo"
          width={658}
          height={169}
          className="w-80 h-auto cursor-pointer"
          onClick={() => { route.push('/') }}
        ></Image>
        <div className="flex flex-row justify-start items-center ml-8">
        {
            MENUS.map((item, idx) => (<motion.div key={item} custom={idx} className='text-white text-[2.8rem] flex-1 flex flex-row justify-end pl-48'
              variants={menuVariants} initial={{ opacity: 0, y: 100 }} animate="open" onMouseEnter={() => { setHover(item) }} onMouseLeave={() => { setHover(undefined) }}
            >
              <div className="flex flex-col justify-start items-center w-max cursor-pointer" onClick={() => { route.push(`/${item.toLowerCase()}`) }}>
                <div className="pb-3">{item === 'Contact' ? t('Contact') : item}</div>
                {
                  (hover === item || pathname === `/${item.toLowerCase()}`) ? (
                    <motion.div className="w-full h-1 bg-[#7A4EEE]" layoutId="underline" animate={{ opacity: 1 }} initial={{ opacity: 0 }}/>
                  ) : (<div className="h-1"></div>)
                }
              </div>
            </motion.div>))
          }
        </div>
      </div>
      {children}
    </div>
  )
}

export default BuisinessLayout
