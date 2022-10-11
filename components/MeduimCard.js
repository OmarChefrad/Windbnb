import Image from "next/image"
import React from "react"

const MeduimCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center m-2 mt-5 space-x-4 cursor-pointer hover:scale-105 transition transform duration-200 ease-out rounded-lg">
      <div className="relative h-64 w-96 shadow-lg shadow-blue-500/50 ">
        <Image
          src={img}
          alt="Image"
          layout="fill"
          className="rounded-lg object-cover "
        />
      </div>
      <div
        className="pt-3 tracking-[5px] text-lg font-bold text-blue-200"
        style={{ textShadow: "2px 2px #057cfd" }}>
        {title}
      </div>
    </div>
  )
}

export default MeduimCard
