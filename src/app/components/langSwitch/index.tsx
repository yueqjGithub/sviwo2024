import { Context } from "@/app/stores";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { FC, useContext, useState } from "react";

type Props = {
  currentColor: string
}

const LangSwitch: FC<Props> = ({ currentColor }) => {
  const { locale, setLocale } = useContext(Context)
  const [expand, setExpand] = useState(false)
  const pathname = usePathname()
  return (
    <div className="relative cursor-pointer">
      <div className={`flex flex-row justify-center items-center pb-3 text-[2rem] ${['/golf'].includes(pathname) ? 'grayscale brightness-50' : ''}`} onClick={() => { setExpand(!expand) }}>
        <span style={{ color: currentColor }} >{locale ? locale.slice(0, 2).toUpperCase() : 'EN'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={currentColor} className="w-6 h-6 ml-2">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
        </svg>
      </div>
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full'>
        <AnimatePresence>
          {expand && <motion.div animate={{ scaleY: 1, opacity: 1 }} exit={{ scaleY: 0, opacity: 0 }}
            className="flex flex-col justify-centerrounded-lg shadow-sm bg-white rounded-lg overflow-hidden"
          >
            <div onClick={() => { setLocale('en-US'); setExpand(false) }} className="py-3 px-4 border-b border-dashed text-black border-gray-500 hover:bg-gray-600 hover:text-white">English</div>
            <div onClick={() => { setLocale('es-ES'); setExpand(false) }} className="py-3 px-4 hover:bg-gray-600 hover:text-white text-black">español</div>
          </motion.div>}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LangSwitch
