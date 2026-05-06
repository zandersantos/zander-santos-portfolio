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
    <section id="about" className="min-h-screen flex items-center px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-md uppercase text-neutral-400 mb-4">About</h2>

        <p className="text-xl leading-relaxed text-neutral-600 font-light mb-12">
          I&apos;m a full-stack developer based in Winnipeg who&apos;s passionate about building things
          that matter. I thrive on collaboration and communication, translating ideas into
          solutions that work for different audiences. I&apos;m constantly exploring emerging
          technologies and asking &quot;what&apos;s possible?&quot; More than anything, I love learning.
          Complex problems energize me, and I&apos;m always looking for opportunities to expand
          my knowledge and grow.
        </p>
        <div className="border-l border-neutral-200 pl-6">
          <p className="text-sm uppercase text-neutral-400 mb-6">
            Tech stack
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-4">
                Frontend
              </h4>
              <div className="space-y-2">
                {frontend.map((skill) => (
                  <div key={skill} className="text-neutral-600 font-light">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-4">
                Backend
              </h4>
              <div className="space-y-2">
                {backend.map((skill) => (
                  <div key={skill} className="text-neutral-600 font-light">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-4">
                Tools & Services
              </h4>
              <div className="space-y-2">
                {tools.map((skill) => (
                  <div key={skill} className="text-neutral-600 font-light">
                    {skill}
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
