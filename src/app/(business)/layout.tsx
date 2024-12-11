'use client'

import { FC } from "react";
import './layout.scss'

const BuisinessLayout: FC<Readonly<{
  children: React.ReactNode;
}>> = ({
  children,
}) => {
    
    return (
      <div className="w-full">
        {children}
      </div>
    )
  }

export default BuisinessLayout
