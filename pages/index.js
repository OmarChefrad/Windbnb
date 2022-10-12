import Head from "next/head"
import Main from "../components/Main"
import Header from "../components/Header"
import SmallCard from "../components/SmallCard"
import MeduimCard from "../components/MeduimCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"
import SimpleMap from "../components/Map"

export default function Home({ posts, cardsData }) {
  return (
    <div>
      <Head>
        <title>WindBnb</title>
        <meta
          name="description"
          content="Vacations Homes for Rent"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="bg-repeat w-full h-full text-primary-100 heropattern-rain-blue-100">
        <Header />
        <Main />

        <div className="max-w-7xl mx-auto px-10 sm:px-16">
          <div className="p-6 md:p-10 pb-0 md:pb-2 space-y-8">
            <h2
              className="text-2xl md:text-4xl font-serif tracking-[5px] text-blue-200 font-bold"
              style={{ textShadow: "2px 2px 0.5px #057cfd" }}>
              Explore Nearby
            </h2>
          </div>
          <div className="pt-6">
            <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-solid border-2 border-blue-200 w-full rounded-2xl">
              {posts?.map(({ img, distance, location }) => (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              ))}
            </section>

            <h2
              className=" p-6  text-2xl md:text-4xl font-serif text-blue-200 font-semibold tracking-[5px]"
              style={{ textShadow: "2px 2px 0.5px #057cfd" }}>
              Live Anywhere
            </h2>
            <div className="max-w-7xl mx-auto px-8 sm:px-16">
              <div className="pt-0">
                <section className="grid grid-cols-1 sm:grid-cols-2 border-solid border-2 border-blue-200 w-full rounded-2xl">
                  {cardsData.map(({ img, title }) => (
                    <MeduimCard
                      key={title}
                      img={img}
                      title={title}
                    />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
        <SimpleMap />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by WindBnb."
          buttonText="Get Inspired"
        />
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetch("https://www.jsonkeeper.com/b/Y0UP").then((res) =>
    res.json()
  )

  const cardsData = await fetch("https://www.jsonkeeper.com/b/3CCE").then(
    (res) => res.json()
  )
  return {
    props: {
      posts,
      cardsData,
    },
  }
}
