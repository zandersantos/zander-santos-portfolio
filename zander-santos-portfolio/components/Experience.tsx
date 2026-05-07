const Experience = () => {

  return (
    <section className="min-h-screen px-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-md uppercase text-neutral-400 mb-10">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-neutral-200 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-medium text-neutral-800">
                Full Stack Developer | Confidential Industry Project (ACE Project Space)
              </h3>
              <span className="text-xs uppercase text-neutral-400">
                (August 2025 – May 2026)
              </span>
            </div>

            <p className="text-sm leading-7 text-neutral-600 font-light">
              Following my initial term, I was selected for two consecutive contracts,
              transitioning to the Primary Full Stack Developer for a large-scale administrative system.
              I architected server-side logic and API route handlers using TypeScript, Next.js, and Node.js,
              while managing complex data structures with Prisma and PostgreSQL.
              I led a critical production system restoration by re-engineering the deployment environment on DigitalOcean,
              optimizing CI/CD pipelines to ensure 24/7 system stability for technical and non-technical stakeholders.
            </p>
          </div>

          <div className="border border-neutral-200 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-medium text-neutral-800">
                Full Stack Developer | ConneXions (ACE Project Space)
              </h3>
              <span className="text-xs uppercase text-neutral-400">
                (May 2025 – August 2025)
              </span>
            </div>
            <p className="text-sm leading-7 text-neutral-600 font-light">
              I developed core features for a React Native mobile application focused on community safety.
              My work included integrating third-party APIs like Twilio for secure OTP authentication and real-time notifications,
              while managing data synchronization with a PostgreSQL (Supabase) backend.
              I focused on delivering reliable system behavior in an Agile environment,
              ensuring the application met the accessibility and security needs of at-risk populations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
