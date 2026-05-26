const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8">
      <div className="max-w-7xl mx-auto w-full sm:flex-1 sm:flex sm:items-center">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-xl text-cyan-400">
            Fullstack Software Developer
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none break-words">
            Zander Santos
          </h1>
          <a
            href="#about"
            className="pt-6 sm:pt-0 sm:absolute sm:bottom-10 sm:left-1/2 sm:-translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="scroll-down">
              See more about me
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;