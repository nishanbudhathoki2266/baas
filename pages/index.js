import Banner from "@/components/Banner";
import Header from "@/components/Header";
import SmallCard from "@/components/SmallCard";
import React from "react";

const Home = ({ exploreData }) => {
  return (
    <div className="font-openSans">
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from the server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.img} item={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await response.json();

  return {
    props: {
      exploreData,
    },
  };
}

export default Home;
