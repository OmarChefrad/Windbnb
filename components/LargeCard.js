import Image from "next/image"
import React from "react"

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative  py-16 px-2 md:px-6 cursor-pointer">
      <div className="relative h-96 min-w-[200px]">
        <Image
          src={img}
          alt="Enjoy Summer"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12 ">
        <h3 className="text-4xl text-slate-900 font-semibold mb-3 w-64 md:w-full ">
          {title}
        </h3>
        <p className="font-serif text-slate-900">{description}</p>
        <button className="text-sm text-white bg-slate-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
