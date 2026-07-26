import SectionLabel from "./ui/SectionLabel";

const About = () => {

  const frontend = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  ];

  const backend = [
    "C# / .NET",
    "Node.js",
    "REST APIs",
  ];

  const database = [
    "Prisma ORM",
    "Supabase",
    "PostgreSQL",
    "SQL",
  ];

  const tool = [
    "Git/GitHub",
    "DigitalOcean",
    "Vercel",
    "Azure",
    "AWS",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 py-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 max-w-xl">
            <SectionLabel>
              About
            </SectionLabel>

            <div className="about-info bg-gray-900/40 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-10">
              <h2 className="text-3xl tracking-tight text-white mb-6">
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

          <div className="grid grid-cols-1 gap-6">
            <div className="skill-card w-full bg-cyan-600 rounded-2xl px-8 py-6 shadow-lg border border-neutral-200">
              <h3 className="text-md uppercase text-cyan-200 tracking-[0.3em] mb-6">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-black/20 text-md font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card w-full bg-purple-900 rounded-2xl px-8 py-6 shadow-lg border border-neutral-200">
              <h3 className="text-md uppercase text-purple-400 tracking-[0.3em] mb-6">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-black/50 text-md font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card w-full bg-orange-900 rounded-2xl px-8 py-6 shadow-lg border border-neutral-200">
              <h3 className="text-md uppercase text-orange-400 tracking-[0.3em] mb-6">
                Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {database.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-black/50 text-md font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-card w-full bg-gray-900 rounded-2xl px-8 py-6 shadow-lg border border-neutral-200">
              <h3 className="text-md uppercase text-gray-400 tracking-[0.3em] mb-6">
                Cloud & Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-black text-md font-light">
                    {skill}
                  </span>
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