import { FC } from "react";
import CarsoulsContent from "./components/carsouls";
import TopContent from "./components/topContent";
import HeaderBar from "@/app/components/headerBar";

const HomePage:FC = () => {
  return (
    <div className="w-full h-screen snap-y snap-mandatory overflow-auto">
      <HeaderBar></HeaderBar>
      <TopContent></TopContent>
      <CarsoulsContent></CarsoulsContent>
      <div className="w-full h-[108rem] md:h-screen bg-black snap-center relative z-20 flex flex-row justify-center items-center text-[4rem] text-white font-semibold">3</div>
      <div className="w-full h-[108rem] md:h-screen bg-white snap-center relative z-20 flex flex-row justify-center items-center text-[4rem] text-black font-semibold">4</div>
    </div>
  )
}

export default HomePage