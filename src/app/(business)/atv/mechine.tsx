'use client'

import { motion } from "motion/react"
import { FC } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const MechineSection: FC = () => {
  const t = useTranslations('Atv')
  return (
    <div className="w-full h-[108rem] md:h-screen bg-[#9D9D9D] overflow-hidden flex flex-col justify-around items-center">
      <div className="w-full flex flex-row justify-start items-center">
        <motion.div
          className='w-2/3 px-48 py-20 rounded-se-3xl rounded-ee-3xl bg-[#260835] text-4xl text-white flex flex-row justify-around items-center'
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Image
            src={'/1_img1.png'}
            alt="1_img1"
            width={391}
            height={329}
            className="w-1/3 h-auto mr-8"
          ></Image>
          <div className="flex flex-col justify-center items-start">
            <div className="font-bold mb-4 text-6xl">{t('Section_3_label_1')}</div>
            <pre className="whitespace-pre-wrap text-wrap leading-normal">{t('Section_3_desc_1')}</pre>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex flex-row justify-end items-center">
        <motion.div
          className='w-2/3 px-48 py-20 rounded-ss-3xl rounded-es-3xl bg-[#260835] text-4xl text-white flex flex-row justify-around items-center'
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="flex flex-col justify-center items-end">
            <div className="font-bold mb-4 text-6xl">{t('Section_3_label_2')}</div>
            <pre className="whitespace-pre-line text-right leading-normal">{t('Section_3_desc_2')}</pre>
          </div>
          <Image
            src={'/1_img2.png'}
            alt="1_img2"
            width={374}
            height={345}
            className="w-1/3 h-auto ml-8"
          ></Image>
          
        </motion.div>
      </div>
    </div>
  )
}

export default MechineSection