import React from "react"
import Image from "next/image"
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 pl-5  md:grid-cols-3  bg-white shadow-2xl md:shadow  pt-4 py-4 md:-px-10">
      <div className="pl-0 md:pl-10 h-10 pt-2 hidden sm:flex">
        <Image
          src="/../public/airbnb.png"
          alt="logo"
          width={32}
          height={32}
          className="inline "
        />
        <h1 className="pl-1 text-2xl font-bold text-[#057cfd] tracking-[-2px] hidden md:flex">
          windbnb
        </h1>
      </div>

      <div className="flex  items-center border-2 rounded-full shadow-sm p-2 h-12">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none w-full"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#1184ff] text-white rounded-full p-2  cursor-pointer" />
      </div>

      <div className="flex space-x-4 items-center justify-center md:justify-end text-gray-600 md:pr-10 pr-0">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-4 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
