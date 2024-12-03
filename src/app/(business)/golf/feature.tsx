'use client'
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FC } from "react";

const variants = {
  inView: {
    opacity: 1,
    x: 0,
  },
  initial: {
    opacity: 0,
    x: 50
  }
}

const FeatureSection:FC = () => {
  const t = useTranslations("Golf")
  return (
    <motion.div layout style={{ backgroundImage: "url('/golf3_bg.png')" }} className="w-full h-[108rem] md:h-screen relative bg-no-repeat bg-[length:100%_100%] bg-center overflow-hidden flex flex-row justify-end items-center pr-96">
      <motion.div layout className="flex flex-col justify-start items-start w-max" variants={variants}>
        <motion.div custom={0} className={`text-[#F16022] text-2xl flex flex-row justify-start items-start mb-9`} variants={variants}
          initial={'initial'} whileInView={'inView'} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, ease: 'linear', dealy: 0 }}
        >
          <div className="w-4 h-4 bg-[#F16022] mr-6"></div>
          <div className="w-[44rem] leading-normal text-wrap whitespace-pre-wrap break-words">{t('Features_1')}</div>
        </motion.div>
        <motion.div custom={1} className={`text-[#F16022] text-2xl flex flex-row justify-start items-start mb-9`} variants={variants}
          initial={'initial'} whileInView={'inView'} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'linear', dealy: 0.5 }}
        >
          <div className="w-4 h-4 bg-[#F16022] mr-6"></div>
          <div className="w-[44rem] leading-normal text-wrap whitespace-pre-wrap break-words">{t('Features_2')}</div>
        </motion.div>
        <motion.div custom={2} className={`text-[#F16022] text-2xl flex flex-row justify-start items-start mb-9`} variants={variants}
          initial={'initial'} whileInView={'inView'} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'linear', dealy: 1 }}
        >
          <div className="w-4 h-4 bg-[#F16022] mr-6"></div>
          <div className="w-[44rem] leading-normal text-wrap whitespace-pre-wrap break-words">{t('Features_3')}</div>
        </motion.div>
        <motion.div custom={3} className={`text-[#F16022] text-2xl flex flex-row justify-start items-start mb-9`} variants={variants}
          initial={'initial'} whileInView={'inView'} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'linear', dealy: 1.5 }}
        >
          <div className="w-4 h-4 bg-[#F16022] mr-6"></div>
          <div className="w-[44rem] leading-normal text-wrap whitespace-pre-wrap break-words">{t('Features_4')}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default FeatureSection
