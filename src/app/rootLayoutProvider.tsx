'use client'

import { FC, PropsWithChildren, useEffect } from "react";

import { IntlProvider } from "next-intl";
import { useContext } from "react";
import zhCN from "../../messages/zh-CN";
import enUS from "../../messages/en-US";
import { Context } from "./stores";

const localesDepends = ['zh-CN', 'en-US']

const RootLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
  const { locale, setLocale } = useContext(Context)
  const messages = {
    "zh-CN": zhCN,
    "en-US": enUS
  }

  useEffect(() => {
    const _local = window.navigator.language
    console.log(_local)
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
