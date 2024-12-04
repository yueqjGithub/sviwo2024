'use client'

import { FC, PropsWithChildren, useEffect } from "react";

import { IntlProvider } from "next-intl";
import { useContext } from "react";
// import zhCN from "../../messages/zh-CN";
import enUS from "../../messages/en-US";
import esES from "../../messages/es-ES";
import { Context } from "./stores";

const localesDepends = ['en-US', 'es-ES']

const RootLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale, setLocale } = useContext(Context)
  const messages = {
    // "zh-CN": zhCN,
    "en-US": enUS,
    "es-ES": esES
  }

  useEffect(() => {
    let _local = window.navigator.language
    if (_local.startsWith('es-')) {
      _local = 'es-ES'
    }
    setLocale(localesDepends.includes(_local) ? _local : 'en-US')
  }, [])

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]} timeZone="Asia/Shanghai">
        {children}
      </IntlProvider>
    </>
  )
}

export default RootLayoutProvider
