'use client'

import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import styles from './index.module.scss'
import NavComp from "@/app/components/nav";

const regs = {
  email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  message: /^.{1,200}$/
}

const ContactPage: FC = () => {
  const t = useTranslations('ContactPage')
  const commonT = useTranslations('Common')

  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const checkEmail = (email: string) => {
    setEmail(email)
    if (regs.email.test(email)) {
      setEmailError(false)
      return
    }
    setEmailError(true)
  }

  const checkMessage = (message: string) => {
    setMessage(message)
    if (regs.message.test(message)) {
      setMessageError(false)
      return
    }
    setMessageError(true)
  }

  const onSubmit = async () => {
    if (!regs.email.test(email)) {
      setEmailError(true)
      return
    }

    if (!regs.message.test(message)) {
      setMessageError(true)
      return
    }

    const query = {
      email,
      content: message
    }
    const res = await fetch(`http://server.sviwo.cn:8000/common/sendEmail?${new URLSearchParams(query)}`)
    console.log(res)
    if (res.ok) {
      alert(commonT('sendMessageSuccess'))
    }
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <NavComp></NavComp>
      <Image
        alt="bg"
        src={'/start_bg.png'}
        className="w-full md:h-auto h-full object-cover"
        width={1920}
        height={1080}
      ></Image>
      <div className="absolute left-0 top-0 w-full h-full flex md:flex-row md:justify-between flex-col justify-center items-center md:pl-60 md:pr-20">
        <div className="flex flex-col md:justify-start justify-center items-start w-max md:mb-0 mb-[10vh]">
          <div className="text-[10rem] md:text-[4.8rem] text-white text-nowrap mb-32 tracking-widest">{t("DescTitle")}</div>
          <div className="max-w-[95vw] md:max-w-[54rem] whitespace-pre-wrap break-word leading-normal md:leading-loose tracking-widest text-white text-[6rem] md:text-[2.2rem]">{t("Desc")}</div>
        </div>
        <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: '100%', opacity: 0 }} transition={{ duration: 1, ease: 'easeInOut' }} className="md:flex-1 flex flex-col justify-end items-center md:h-full" layout>
          <div className="flex flex-col justify-start items-center relative bg-[#010001] rounded-2xl pb-[8.8rem] md:pt-[26rem] pt-[30%] px-14">
            <Image
              src={'/contact_image1.png'}
              alt="car"
              className="w-[75%] md:w-[80rem] h-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] md:max-w-7xl"
              width={807}
              height={428}
            ></Image>
            <div className="flex flex-col justify-start items-center text-[10rem] md:text-2xl text-white md:w-[50rem] w-[85vw]">
              <div className={`flex-row flex-jst-start items-center py-4 px-12 bg-[#B3B3B3] rounded-2xl md:w-[50rem] w-[85vw] md:mb-11 mb-48 flex ${emailError ? styles.danger : ''}`}>
                <input placeholder={`${t('Email')}:`} type="text" className="placeholder:italic placeholder:text-white block flex-5 appearance-none text-white bg-transparent outline-none focus-within:placeholder:text-transparent" onInput={(e) => checkEmail(e.currentTarget.value)}/>
              </div>
              <div className={`flex-row flex-jst-start items-start py-4 px-12 bg-[#B3B3B3] rounded-2xl md:w-[50rem] w-[85vw] md:mb-11 mb-48 flex ${messageError ? styles.danger : ''}`}>
                {/* <div className="flex-1 flex flex-row justify-end items-center mr-[2rem]">{t('Message')}:</div> */}
                <textarea placeholder={`${t('Message')}:`} maxLength={200} name="message" rows={8} className="placeholder:italic placeholder:text-white block flex-5 resize-none appearance-none text-white bg-transparent outline-none focus-within:placeholder:text-transparent"
                  onInput={(e) => checkMessage(e.currentTarget.value)}
                ></textarea>
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <div className="md:py-2 py-16 md:px-5 px-28 rounded-full bg-[#7A4EEE] text-white font-semibold text-[10rem] md:text-2xl" onClick={onSubmit}>{t('Send')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
