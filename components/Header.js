import React, { useState } from "react"
import Image from "next/image"
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { useRouter } from "next/router"

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === 13) {
      search()
    }
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 md:grid-cols-3 bg-white shadow-2xl md:shadow  pl-0 md:pl-5  pt-4 py-4 md:-px-10 ">
      <div
        className="pl-2 md:pl-10  pr-2 md:pr-0 h-10 pt-2 hidden md:flex cursor-pointer"
        onClick={() => router.push("/")}>
        <Image
          src="/../public/airbnb.png"
          alt="logo"
          width={32}
          height={32}
          className="inline"
        />
        <h1 className="pl-1 text-2xl font-bold text-[#057cfd] tracking-[-2px] hidden md:flex">
          windbnb
        </h1>
      </div>

      <div className="flex ml-2 md:ml-0 items-center border-2 rounded-full shadow-sm p-2 h-12">
        <div
          className="flex md:hidden cursor-pointer"
          onClick={() => router.push("/")}>
          <Image
            src="/../public/airbnb.png"
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <input
          type="text"
          className="flex-grow pl-3 md:pl-5 bg-transparent outline-none w-full col-span-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#1184ff] text-white rounded-full p-2  cursor-pointer" />
      </div>

      <div className="flex space-x-4 items-center justify-end md:justify-end text-gray-600 md:pr-10 pr-3">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-4 cursor-pointer" />
        <div className="flex justify-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg text-blue-400 outline-none"
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow">
              Cancel
            </button>
            <button
              className="flex-grow"
              onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
