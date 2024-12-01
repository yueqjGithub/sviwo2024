'use client'

import { createContext, Dispatch, SetStateAction, useState } from "react";

const Context = createContext<{
  locale: string,
  setLocale: Dispatch<SetStateAction<string>>
}>({
  locale: 'en-US',
  setLocale: () => { }
})

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState('en-US')
  return (
    <Context.Provider value={{ locale, setLocale }}>
      {children}
    </Context.Provider>
  )
}

export { Context, StoreProvider }