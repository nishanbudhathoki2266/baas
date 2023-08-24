import { useRouter } from "next/router";
import { format } from "date-fns";

function SearchPage() {
  const router = useRouter();
  const { location, startDate, endDate, numGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <main className="flex">
      <section className="flex-grow pt-14 px-6">
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
      </section>
    </main>
  );
}

export default SearchPage;
