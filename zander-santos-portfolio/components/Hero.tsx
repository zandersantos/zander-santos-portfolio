const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6 -translate-y-20">
          <p className="uppercase tracking-[0.3em] text-xl text-cyan-400">
            Fullstack Software Developer
          </p>
          <h1 className="text-9xl font-black text-white tracking-tight leading-none">
            Zander Santos
          </h1>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="scroll-down">
          See more about me
        </span>
      </a>
    </section>
  );
};

export default Hero;