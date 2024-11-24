'use client'

import { FC } from "react";
import styles from './index.module.scss'
const TopContent: FC = () => {
  return (
    <div className="sec-1 w-full h-[108rem] md:h-screen snap-center bg-black relative md:top-0">
      <div className="absolute top-1/2 left-0 flex flex-col justify-start items-center">
        <div className={`w-[48rem] flex flex-row justify-end items-center py-8 pr-14 rounded-ee-full rounded-se-full font-semibold bg-gradient-to-l from-[rgba(255,255,255,0.7)] to-transparent text-[3.6rem] text-white ${styles.tie}`}>Cross The Land</div>
        <div className={`text-sviwoPrimary text-[4.5rem] font-semibold py-6 px-12 rounded-full bg-white mt-40 leading-none`}>GO</div>
      </div>
    </div>
  )
}

export default TopContent
