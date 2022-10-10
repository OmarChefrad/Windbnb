import Image from "next/image"
import React from "react"

const MeduimCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt="Image"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <div>{title}</div>
    </div>
  )
}

export default MeduimCard
