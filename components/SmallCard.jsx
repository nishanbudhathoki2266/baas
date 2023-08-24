import Image from "next/image";

function SmallCard({ item: { location, distance, img } }) {
  return (
    <div className="flex gap-4 items-center m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-50 hover:scale-105 transition-transform ease-out duration-200">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image
          src={img}
          alt={`Home in ${location}`}
          layout="fill"
          className="rounded-lg"
        />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
