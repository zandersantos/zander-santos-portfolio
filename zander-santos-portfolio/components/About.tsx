const About = () => {

  const frontend = [
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Tailwind CSS',
  ];

  const backend = [
    'SQL (PostgreSQL)',
    'C# / .NET',
    'Node.js',
  ];

  const tools = [
    'Git/GitHub',
    'Supabase',
    'AWS',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-8 py-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <span className="inline-block px-5 py-2 bg-white text-black rounded-full text-md uppercase tracking-[0.2em] font-bold mb-8">
              About
            </span>

            <div className="about-info bg-gray-900/40 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-10">
              <h2 className="text-4xl tracking-tight text-white mb-6">
                Building digital experiences
              </h2>

              <p className="text-xl leading-relaxed text-gray-300 pb-4">
                I&apos;m a full-stack developer based in <span className="text-cyan-400 font-medium">Winnipeg </span> who&apos;s
                passionate about building digital experiences that genuinely help people and make everyday tasks easier.
              </p>
              <div className="pt-4 border-t-2 border-cyan-500/60">
                <p className="text-lg leading-relaxed text-gray-400 pb-4">
                  I enjoy turning ideas into practical, user-focused solutions through thoughtful design and development.
                  Whether it&apos;s streamlining workflows, improving accessibility, or creating engaging experiences,
                  I like building technology that people can actively use and benefit from.
                </p>
              </div>

              <div className="pt-6 border-t-2 border-cyan-500/60">
                <p className="text-base text-gray-300 italic">
                  Complex problems energize me, and I&apos;m always looking for opportunities to expand
                  my knowledge and grow.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="skill-card bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl px-8 py-6 text-white shadow-xl">
              <h3 className="text-md uppercase text-cyan-200 tracking-[0.3em] mb-6">
                Frontend
              </h3>
              <div className="space-y-3">
                {frontend.map((skill) => (
                  <div key={skill} className="flex item-center gap-3 group">
                    <span className="text-md font-light">
                      - {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-card bg-gray-900/80 rounded-2xl px-8 py-6 shadow-lg border border-neutral-200">
              <h3 className="text-md uppercase text-purple-400 tracking-[0.3em] mb-6">
                Backend
              </h3>
              <div className="space-y-3">
                {backend.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <span className="text-md text-white font-light">
                      - {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-card bg-gray-400/80 rounded-2xl px-8 py-6 shadow-lg">
              <h3 className="text-md uppercase text-blue-800 tracking-[0.3em] mb-6">
                Tools & Services
              </h3>
              <div className="space-y-3">
                {tools.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <span className="text-md text-white font-light">
                     - {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;