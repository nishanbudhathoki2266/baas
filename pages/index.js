import Banner from "@/components/Banner";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import React from "react";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="font-openSans">
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl text-text font-bold tracking-tighter pb-5">
            Explore Nearby
          </h2>

          {/* Pull some data from the server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} item={item} />
            ))}
          </div>
        </section>

        {/* Live anywhere section  */}
        <section>
          <h2 className="text-4xl text-text font-bold tracking-tighter py-8">
            Live on Choice
          </h2>

          <div className="flex gap-3 overflow-scroll scrollbar-hide p-3 -ml-3 scroll-smooth">
            {/* Loop */}
            {cardsData.map((item) => (
              <MediumCard key={item.img} item={item} />
            ))}
          </div>
        </section>

        {/* Large card - banner */}
        <section>
          <LargeCard />
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const exploreDataResponse = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await exploreDataResponse.json();

  const cardsDataResponse = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = await cardsDataResponse.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;
