'use client'

import { motion } from "motion/react"
import { FC, useRef } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import styles from './index.module.scss'

const _icons = [
  'icon-dianliang-L',
  'icon-fanghusan',
  'icon-dianji',
  'icon-nengliang',
  'icon-jiaodu',
  "icon-icon-oc-monitor",
  "icon-zidongzhuche",
  "icon-UltraLightweight",
  "icon-icon_musica_ploop",
  "icon-baoxian",
  "icon-remote-control-line",
  "icon-dapingkongzhi"
]

const IntroSection: FC = () => {
  const t = useTranslations("Golf")
  const scrollRef = useRef<HTMLDivElement>(null)
  return (
    <motion.div layout className={`w-full h-[108rem] md:h-screen flex flex-col justify-start items-center overflow-hidden ${styles.introSection}`}>
      <div className='w-full bg-[#231F20]'>
        <motion.div className='w-full' initial={{ x: '100%' }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <Image
            src={'/golf5_tabbar.png'}
            alt="golf"
            priority
            width={1920}
            height={159}
            className="w-full h-auto"
          ></Image>
        </motion.div>
      </div>
      <div className="flex-1 w-full min-h-0 overflow-y-scroll md:snap-y md:snap-mandatory" ref={scrollRef}>
        <div className={`w-full overflow-hidden flex flex-row justify-between items-center py-20 px-96 md:snap-center ${styles.scrollSection}`}>
          <div className="flex-1 flex flex-col justify-end items-start">
            {
              _icons.map((item, idx) => {
                return (
                  <motion.div key={item}
                    className='max-w-full flex flex-row justify-start items-center mb-2 text-2xl text-[#F16123]'
                    initial={{ y: '100%', opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeInOut', delay: idx * 0.1 }}
                  >
                    <div className="bg-[#505050] w-10 h-10 rounded-full overflow-hidden flex flex-row justify-center items-center text-white text-xl mr-8">
                      <i className={`iconfont ${item}`}></i>
                    </div>
                    <div>{t(`Intros_${idx + 1}`)}</div>
                  </motion.div>
                )
              })
            }
            <div className="w-full flex flex-row justify-start items-start mb-4">
              <div className="flex w-1/4 flex-col justify-start items-center">
                <div className="text-white w-full py-2 flex flex-row justify-center items-center bg-[#f16123] text-2xl font-semibold mb-4">{t('Intros_label_1')}</div>
                <Image
                  src={'/golf4_img2.png'}
                  className="w-full h-60"
                  objectFit="contain"
                  alt='golf'
                  width={228}
                  height={228}
                ></Image>
                <div className="w-full flex flex-row justify-start items-center text-[#F16123] text-2xl leading-normal">{t('Intros_options_1')}</div>
                <div className="w-full flex flex-row justify-start items-center text-[#F16123] text-2xl leading-normal">{t('Intros_options_2')}</div>
                <div className="w-full flex flex-row justify-start items-center text-[#F16123] text-2xl leading-normal">{t('Intros_options_3')}</div>
              </div>
              <div className="flex w-1/4 flex-col justify-start items-center ml-6">
                <div className="text-white w-full py-2 flex flex-row justify-center items-center bg-[#f16123] text-2xl font-semibold mb-4">{t('Intros_label_2')}</div>
                <Image
                  src={'/golf4_img3.png'}
                  className="w-full h-60"
                  objectFit="contain"
                  alt='golf'
                  width={228}
                  height={228}
                ></Image>
                <div className="w-full flex flex-row justify-start items-center text-[#F16123] text-2xl leading-normal">{t('Intros_options_4')}</div>
                <div className="w-full flex flex-row justify-start items-center text-[#F16123] text-2xl leading-normal">{t('Intros_options_5')}</div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col justify-end items-end ml-24">
            <Image
              alt="car"
              src={'/golf4_img1.png'}
              width={859}
              height={837}
              className="w-[60rem] h-auto"
            ></Image>
            <div className="font-semibold text-4xl text-[#F16123] mt-8">www.VOLTCADDY.com</div>
          </div>
        </div>
        <div className={`w-full overflow-hidden ${styles.scrollSection} md:snap-center`}>
          <div className="w-full h-1/3 flex flex-row justify-between items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="w-max flex flex-col justify-center items-start">
                <div className="flex flex-row justify-center items-center flex-nowrap mb-6">
                  <Image
                    src={'/logo11.png'}
                    className="w-16 h-auto mr-8"
                    width={396}
                    height={742}
                    alt='logo'
                  ></Image>
                  <pre className="whitespace-pre-wrap text-5xl text-black italic">{t('Options.one.title')}</pre>
                </div>
                <ul className="list-disc text-2xl text-[#F16123]">
                  <li className="text-nowrap leading-normal">{t('Options.one.desc_1')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.one.desc_2')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.one.desc_3')}</li>
                </ul>
              </div>
            </div>
            <motion.div className='h-full' viewport={{ once: true }} initial={{ opacity: 0, x: '100%' }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <Image
                alt='options'
                src={'/golf5_img1.png'}
                width={1072}
                height={313}
                className="h-full w-auto"
              ></Image>
            </motion.div>
          </div>
          <div className="w-full h-1/3 flex flex-row justify-between items-center">
            <motion.div className='h-full' viewport={{ once: true }} initial={{ opacity: 0, x: '-100%' }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <Image
                alt='options'
                src={'/golf5_img2.png'}
                width={1072}
                height={313}
                className="h-full w-auto"
              ></Image>
            </motion.div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="w-max flex flex-col justify-center items-start">
                <div className="flex flex-row justify-center items-center flex-nowrap mb-6">
                  <Image
                    src={'/logo11.png'}
                    className="w-16 h-auto mr-8"
                    width={396}
                    height={742}
                    alt='logo'
                  ></Image>
                  <pre className="whitespace-pre-wrap text-5xl text-black italic">{t('Options.two.title')}</pre>
                </div>
                <ul className="list-disc text-2xl text-[#F16123]">
                  <li className="text-nowrap leading-normal">{t('Options.two.desc_1')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.two.desc_2')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.two.desc_3')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.two.desc_4')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 flex flex-row justify-between items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              <div className="w-max flex flex-col justify-center items-start">
                <div className="flex flex-row justify-center items-center flex-nowrap mb-6">
                  <Image
                    src={'/logo11.png'}
                    className="w-16 h-auto mr-8"
                    width={396}
                    height={742}
                    alt='logo'
                  ></Image>
                  <pre className="whitespace-pre-wrap text-5xl text-black italic">{t('Options.three.title')}</pre>
                </div>
                <ul className="list-disc text-2xl text-[#F16123]">
                  <li className="text-nowrap leading-normal">{t('Options.three.desc_1')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.three.desc_2')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.three.desc_3')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.three.desc_4')}</li>
                  <li className="text-nowrap leading-normal">{t('Options.three.desc_5')}</li>
                </ul>
              </div>
            </div>
            <motion.div className='h-full' viewport={{ once: true }} initial={{ opacity: 0, x: '100%' }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <Image
                alt='options'
                src={'/golf5_img3.png'}
                width={1072}
                height={313}
                className="h-full w-auto"
              ></Image>
            </motion.div>
          </div>
        </div>
        <div className={`w-full overflow-hidden ${styles.scrollSection} md:snap-center p-12`}>
          <Image
            src={'/golf_last.png'}
            alt=""
            width={1801}
            height={1026}
            className="w-full h-full"
          ></Image>
        </div>
      </div>
    </motion.div>
  )
}

export default IntroSection