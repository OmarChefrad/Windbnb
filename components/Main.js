import Image from "next/image"
import React from "react"

export default function Banner() {
  return (
    <>
      <div
        className="w-full bg-fixed bg-cover bg-center flex justify-center items-center relative h-[300px] sm:h-[400px] lg:h-[525px] "
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/961369644130766853/1029020468570759188/wallpaperflare.com_wallpaper.jpg)",
        }}>
        <h1 className="text-white opacity-75 shadow-gray-900 drop-shadow-2xl text-2xl md:text-4xl font-bold ">
          Dont Know Where To Go? Perfect.
        </h1>
      </div>
      <div className="p-10 pb-2 space-y-8 ">
        <h2 className="text-4xl font-semibold">Explore Nearby</h2>
      </div>
    </>
  )
}
