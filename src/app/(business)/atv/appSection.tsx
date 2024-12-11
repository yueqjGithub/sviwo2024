'use client'

import { FC } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const AppSection: FC = () => {
  const t = useTranslations('Atv')
  return (
    <div className="w-full h-[108rem] md:h-screen overflow-hidden bg-gradient-to-tr from-[#1A082F] to-[#010105] flex flex-row justify-between items-center px-60 py-52 md:snap-center scroll-smooth">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <Image
          src={'/app_img.png'}
          alt="app_img"
          className="w-[40rem] h-auto"
          width={396}
          height={850}
        ></Image>
      </motion.div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start text-white">
          <div className="font-bold text-8xl mb-10 italic">SVIWO APP</div>
          <motion.div
            className='text-6xl text-wrap whitespace-pre-wrap leading-snug w-[75rem] mb-8'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0 }}
          >
            {t('Section_6_desc_1')}
          </motion.div>
          <motion.div
            className='text-6xl text-wrap whitespace-pre-wrap leading-snug w-[75rem] mb-8'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
          >{t('Section_6_desc_2')}</motion.div>
          <motion.div
            className='text-6xl text-wrap whitespace-pre-wrap leading-snug w-[75rem] mb-8'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
          >{t('Section_6_desc_3')}</motion.div>
          <motion.div
            className='text-6xl text-wrap whitespace-pre-wrap leading-snug w-[75rem] mb-8'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.9 }}
          >{t('Section_6_desc_4')}</motion.div>
        </div>
      </div>
    </div>
  )
}

export default AppSection
