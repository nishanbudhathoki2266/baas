function Banner() {
  return (
    <div className="bg-primary h-[30dvh] sm:h-[40dvh] lg:h-[50dvh] xl:h-[60dvh] 2xl:h-[70dvh] p-2 flex flex-col gap-2 sm:gap-6 justify-center items-start sm:items-center ">
      <h1 className="text-4xl md:text-6xl banner font-extrabold">
        Find <span className="text-maroon">Homes</span>, Chase
        <span className="text-maroon"> Dreams</span>
      </h1>
      <h2 className="text-md text-maroon uppercase tracking-wide">
        Introducing{" "}
        <span className="text-lg text-black font-semibold">Baas</span>, your
        gateway to hassle-free living
      </h2>
      <button
        type="button"
        className="block bg-maroon rounded-lg px-4 py-3 sm:py-4 sm:px-6 tracking-wider font-semibold uppercase text-lg leading-normal text-white transition duration-150 ease-in-out shadow-black hover:bg-red-800 focus:bg-red-800"
      >
        Start Chasing
      </button>
    </div>
  );
}

export default Banner;
