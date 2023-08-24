function Banner() {
  return (
    <div className="bg-primary h-[30dvh] sm:h-[40dvh] lg:h-[50dvh] xl:h-[60dvh] 2xl:h-[70dvh] p-2 flex flex-col gap-2 sm:gap-6 justify-center items-start sm:items-center ">
      <h1 className="text-4xl sm:text-4xl md:text-6xl text-text font-extrabold">
        Find <span className="text-maroon">Homes</span>, Chase
        <span className="text-maroon"> Dreams</span>
      </h1>
      <h2 className="text-md text-maroon uppercase tracking-wide">
        Introducing Baas, your gateway to hassle-free living
      </h2>
      <button
        type="button"
        className="block bg-secondary rounded-lg px-4 py-3 sm:py-4 sm:px-6 tracking-wider font-bold uppercase text-xl leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Start Chasing
      </button>
    </div>
  );
}

export default Banner;
