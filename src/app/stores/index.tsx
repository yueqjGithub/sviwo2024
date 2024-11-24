'use client'

import { createContext, useState } from "react";

const Context = createContext<{
  curHeadBarBg: string,
  setCurHeadBarBg: (bg: string) => void
}>({
  curHeadBarBg: '',
  setCurHeadBarBg: () => {}
})

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [curHeadBarBg, setCurHeadBarBg] = useState('transparent')
  return (
    <Context.Provider value={{ curHeadBarBg: curHeadBarBg, setCurHeadBarBg: setCurHeadBarBg }}>
      {children}
    </Context.Provider>
  )
}

export { Context, StoreProvider }