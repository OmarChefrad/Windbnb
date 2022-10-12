import Image from "next/image"
import React from "react"

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex flex-col justify-center items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-32 w-96 md:h-52 md:w-52 rounded-lg  shadow-lg shadow-blue-500/50">
        <Image
          src={img}
          alt="Image"
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>

      <div className="pt-3 ">
        <h2
          className="font-bold tracking-[3px] text-lg text-blue-200   "
          style={{ textShadow: "2px 2px #057cfd" }}>
          {location}
        </h2>
        <h3 className="text-slate-600 font-sans text-sm">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
