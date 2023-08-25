import { useRouter } from "next/router";
import { format } from "date-fns";

import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

import InfoCard from "@/components/InfoCard";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function SearchPage({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const { lat, long } = searchResults?.[0];

  const center = {
    lat,
    lng: long,
  };

  return (
    <main className="flex flex-col lg:flex-row">
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
      <section className="flex-[1] px-4">
        <div className="h-[60dvh] lg:h-full">
          <LoadScript googleMapsApiKey="AIzaSyDLfjmFgDEt9_G2LXVyP61MZtVHE2M3H-0">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={9}
            >
              {searchResults.map((item) => (
                <MarkerF
                  key={item.img}
                  position={{
                    lat: item.lat,
                    lng: item.long,
                  }}
                />
              ))}
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
