import { useRouter } from "next/router";
import { format } from "date-fns";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

import InfoCard from "@/components/InfoCard";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function SearchPage({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <main className="flex flex-col">
      <section className="flex-[1.4] pt-14 px-6">
        <p className="text-xs">
          400+ stays - {range} - for {numGuests} guest/s
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in {location}
        </h1>

        <div className="hidden lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Popular residences</p>
          <p className="button">Cheap residences</p>
          <p className="button">Rooms and beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map((item) => (
            <InfoCard key={item.img} item={item} />
          ))}
        </div>
      </section>
      <section className="flex-[1] h-[60dvh] w-[100vw] px-4">
        <div className="bg-red-900 h-[60dvh]">
          <LoadScript googleMapsApiKey={process.env.API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://www.jsonkeeper.com/b/5NPS`);
  const searchResults = await response.json();
  return {
    props: {
      searchResults,
    },
  };
}

export default SearchPage;
