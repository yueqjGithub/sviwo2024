'use client'

import { MENUS } from "@/app/constant"
import { motion } from "motion/react"
import { FC, useState } from "react"
import LangSwitch from "../langSwitch"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

const menuVariants = {
  open: (idx: number) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: idx * 0.1 + 0.5
      }
    }
  }
}

const NavComp: FC = () => {
  const t = useTranslations('Menu')
    const [hover, setHover] = useState<typeof MENUS[number]>()
    const route = useRouter()
    const pathname = usePathname()

  return (
    <div className="w-full absolute top-0 z-20 flex flex-row justify-start items-center pl-60 pt-[4.5rem]">
      <Image
        src={'/logo.png'}
        alt="logo"
        width={658}
        height={169}
        className={`w-80 h-auto cursor-pointer ${['/golf'].includes(pathname) ? 'grayscale brightness-50' : ''}`}
        onClick={() => { route.push('/') }}
      ></Image>
      <div className="flex flex-row justify-start items-center ml-8">
        {
          MENUS.map((item, idx) => (<motion.div key={item} custom={idx} className='text-white text-[6rem] md:text-[2.8rem] flex-1 flex flex-row justify-end pl-48'
            variants={menuVariants} initial={{ opacity: 0, x: 50 }} animate="open" onMouseEnter={() => { setHover(item) }} onMouseLeave={() => { setHover(undefined) }}
          >
            <div className="flex flex-col justify-start items-center w-max cursor-pointer" onClick={() => { route.push(`/${item.toLowerCase()}`) }}>
              <div className={`pb-3 ${['/golf'].includes(pathname) ? 'grayscale brightness-50' : ''}`}>{item === 'Contact' ? t('Contact') : item}</div>
              {
                (hover === item || pathname === `/${item.toLowerCase()}`) ? (
                  <motion.div className="w-full h-1 bg-[#7A4EEE]" layoutId="underline" animate={{ opacity: 1 }} initial={{ opacity: 0 }} />
                ) : (<div className="h-1"></div>)
              }
            </div>
          </motion.div>))
        }
        <motion.div layout className="flex-1 flex flex-row justify-center md:justify-end items-center md:pl-48 pl-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <LangSwitch currentColor="#fff"></LangSwitch>
        </motion.div>
      </div>
    </div>
  )
}

export default NavComp