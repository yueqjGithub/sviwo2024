'use client'

import { motion } from "motion/react"
import { FC } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import styles from './index.module.scss'

const Volt: FC = () => {
  const t = useTranslations("Golf")
  return (
    <motion.div layout className="w-full relative h-[108rem] md:h-screen bg-no-repeat bg-auto bg-center overflow-hidden pl-96" style={{ backgroundImage: "url('/golf_2.png')" }}>
      <motion.div className='h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.5)] w-max px-28 py-16' transition={{ duration: 1, ease: 'easeInOut' }}
        whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{ amount: 0.8, once: true }}
      >
        <Image
          src={'/volt_logo.png'}
          className="w-[48rem] h-auto"
          alt="volt"
          width={480}
          height={78}
        ></Image>
        <div className="w-full max-w-[48rem] mt-12 max-h-[58rem] overflow-scroll text-white text-2xl leading-normal break-all whitespace-pre-wrap text-wrap">{t("Desc")}</div>
      </motion.div>
      <div className="w-full absolute left-0 bottom-0">
        <motion.div className={`w-full px-96 pt-40 pb-12 bg-[#F16123] text-5xl text-white flex flex-row justify-end items-end ${styles.orangeBar}`}
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: '-100%' }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeInOut' }}
        >www.VOLTCADDY.com</motion.div>
      </div>
    </motion.div>
  )
}

export default Volt