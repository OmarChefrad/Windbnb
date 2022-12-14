import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useRouter } from "next/router"
import { format } from "date-fns"
import InfoCard from "../components/InfoCard"
import SimpleMap from "../components/Map"

function Search({ searchResults }) {
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests } = router.query
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  const map = searchResults
  const firstElement = Array.from(map)[0]
  const long = firstElement.long
  const lat = firstElement.lat
  console.log(long, lat)

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex mb-6">
        <section className="flex-grow pt-8 px-6">
          <p className="text-xs font-sans">
            200+ Stays - - for {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl text-blue-400 font-semibold mt-2 mb-6">
            Stays nearby
          </h1>
          <div className="hidden md:inline-flex pb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More filters</p>
          </div>
          {searchResults.map(
            ({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <SimpleMap
            long={long}
            lat={lat}
            key={lat}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
