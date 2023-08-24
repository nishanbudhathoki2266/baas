import Image from "next/image";

function LargeCard({ img }) {
  return (
    <div className="mt-4 py-8">
      <div className="relative h-96 rounded-lg overflow-hidden">
        <Image
          src={img}
          alt="Image of large card"
          layout="fill"
          objectFit="cover"
          className="contrast-100 brightness-90"
        />
      </div>
    </div>
  );
}

export default LargeCard;
