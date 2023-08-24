import Image from "next/image";

function MediumCard({ item: { img, title } }) {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden h-80 w-80 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out">
        <Image src={img} alt={`Image for ${title}`} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
