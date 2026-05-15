const About = () => {

  const frontend = [
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Tailwind CSS',
  ];

  const backend = [
    'PostgreSQL',
    'C# / .NET',
    'Node.js',
  ];

  const tools = [
    'Git/GitHub',
    'Supabase',
    'AWS',
    'DigitalOcean',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-8 py-10 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs uppercase tracking-[0.2em] font-medium mb-6">
              About
            </span>

            <h2 className="text-4xl font-bold tracking-tight text-neutral-900 mb-6">
              Building digital experiences
            </h2>

            <p className="text-xl leading-relaxed text-neutral-600">
              I&apos;m a full-stack developer based in <span className="text-neutral-900 font-medium">Winnipeg </span> who&apos;s
              passionate about building things that matter.
            </p>

            <p className="text-lg leading-relaxed text-neutral-500">
              I thrive on collaboration and communication, translating ideas into
              solutions that work. I&apos;m constantly exploring emerging
              technologies and asking &quot;what&apos;s possible?&quot;
            </p>

            <div className="pt-6 border-t-2 border-blue-100">
              <p className="text-base text-neutral-600 italic">
                Complex problems energize me, and I&apos;m always looking for opportunities to expand
                my knowledge and grow.
              </p>
            </div>

          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl px-8 py-6 text-white shadow-xl">
              <h3 className="text-xs uppercase text-blue-200 tracking-[0.3em] mb-6">
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

            <div className="bg-white rounded-2xl px-8 py-6 shadow-lg border border-neutral-200">
              <h3 className="text-xs uppercase text-neutral-400 tracking-[0.3em] mb-6">
                Backend
              </h3>
              <div className="space-y-3">
                {backend.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <span className="text-md text-neutral-700 font-light">
                      - {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-200 rounded-2xl px-8 py-6 shadow-lg">
              <h3 className="text-xs uppercase text-neutral-500 tracking-[0.3em] mb-6">
                Tools & Services
              </h3>
              <div className="space-y-3">
                {tools.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <span className="text-md text-neutral-900 font-light">
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
