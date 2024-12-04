'use client'
import { FC } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const _options = [
  {key: 'name', value: 'Aurora'},
  {key: 'power', value: '2.5KW + 2.5KW'},
  {key: 'torque', value: 'Front:120Nm/Rear:120Nm'},
  {key: 'capacity', value: '60V100AH'},
  {key: 'speed', value: '≤60KM/H'},
  {key: 'wheel', value: '30.48CM(14 inchs)'},
  {key: 'grade', value: '≤30°'},
  {key: 'charge', value: '3-4h'},
  {key: 'endurance', value: '2WD:120km/4WD:80km'},
  {key: 'protection', value: 'ip54'},
  {key: 'weight', value: '340KG'},
  {key: 'size', value: '2200-1500-1100mm'},
  {key: 'battery', value: '780*240-211.5mm'},
]

const itemVariants = {
  inView: (idx: number) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: idx * 0.1 + 0.5
      }
    }
  },
  initial: {
    opacity: 0,
    x: 100
  }
}

const OptionsSection:FC = () => {
  const t = useTranslations('Atv')
  return (
    <div className="w-full h-full overflow-hidden flex flex-col justify-end items-center bg-[#9D9D9D]">
      <div className="w-1/2 flex-1 flex flex-col justify-center items-center">
        {
          _options.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={itemVariants}
                initial="initial"
                whileInView="inView"
                viewport={{ once: true }}
                className='w-full flex flex-row justify-between items-center py-4 border-b border-white border-dotted text-white text-3xl last:border-b-0'
              >
                <div className="flex-1">{t(`Section_2_${item.key}`)}</div>
                <div className="w-1/4 italic">{item.value}</div>
              </motion.div>
            )
          })
        }
      </div>
      <Image
        src={'/csym_img.png'}
        alt="csym"
        className="w-1/4 h-auto"
        width={701}
        height={402}
      ></Image>
      <div className="w-full bg-black h-10"></div>
    </div>
  )
}

export default OptionsSection
