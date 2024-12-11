'use client'
import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const PadSection: FC = () => {
  const t = useTranslations('Atv')
  return (
    <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="w-full h-[108rem] md:h-screen overflow-hidden relative bg-[#9d9d9d]">
      <Image
        src={'/3_bg.png'}
        className="w-full h-[108rem] md:h-screen object-contain"
        width={1920}
        height={1080}
        alt="bg"
      ></Image>
      <div className="w-full h-full absolute top-0 left-0 text-white">
        {/* 文字1 */}
        <div className="flex flex-col justify-center items-start absolute left-[12%] top-[10%]">
          <div className="font-bold mb-4 text-6xl italic">{t('Section_5_label_1')}</div>
          <pre className="whitespace-pre-wrap text-4xl text-wrap leading-normal">{t('Section_5_desc_1')}</pre>
        </div>
        {/* 文字3 */}
        <div className="flex flex-col justify-center items-start absolute left-[39%] bottom-[8%]">
          <div className="font-bold mb-4 text-6xl italic">{t('Section_5_label_3')}</div>
          <pre className="whitespace-pre-wrap text-4xl text-wrap leading-normal">{t('Section_5_desc_3')}</pre>
        </div>
        <div className="absolute right-[7%] top-[12%]">
          <div
            className='flex flex-col justify-start items-center'
          >
            <motion.div
              initial={{ y: '-100', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <Image
                src={'/3_img.png'}
                alt="img"
                width={431}
                height={302}
                className="w-96 h-auto mb-8"
              ></Image>
            </motion.div>
            <div className="flex flex-col justify-center items-start">
              <div className="font-bold mb-4 text-6xl italic">{t('Section_5_label_2')}</div>
              <pre className="whitespace-pre-wrap text-4xl text-wrap leading-normal">{t('Section_5_desc_2')}</pre>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PadSection
