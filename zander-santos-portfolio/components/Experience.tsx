const Experience = () => {

  return (
    <section id="experience" className="min-h-screen flex px-10 pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <span className="inline-block px-5 py-2 bg-white text-black rounded-full text-md uppercase tracking-[0.2em] font-bold mb-8">
            Experience
          </span>
          <div className="space-y-8">
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  Full Stack Software Developer
                </h3>
                <span className="text-sm uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  (August 2025 – May 2026)
                </span>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-cyan-600">
                  Confidential Industry Project
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  ACE Project Space, Red River College Polytechnic
                </p>
              </div>

              <p className="text-base leading-relaxed text-gray-700 mb-4">
                Following my initial term, I was selected for two consecutive contracts through competitive interviews,
                transitioning from a hybrid Project Manager/Developer role to Primary Full Stack Developer.
                I worked across the entire application stack, with primary focus on administrative systems and internal tooling.
                I led the complete UI/UX redesign of the administration view and internal tools using Figma,
                delivering React-based dashboards with data visualizations and searchable media features.
                I architected server-side APIs and route handlers using TypeScript, Next.js, and Node.js,
                supporting authentication workflows, data filtering, real-time updates, and asynchronous operations.
                I managed relational data structures with Prisma ORM and PostgreSQL (Supabase), ensuring data integrity and performant querying.
                I led a critical production system restoration by re-engineering the deployment environment on DigitalOcean,
                utilizing Bash via SSH for server configuration and troubleshooting, while optimizing CI/CD pipelines to maintain 24/7 system stability.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    React
                  </span>

                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Next.js
                  </span>

                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    TypeScript
                  </span>

                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Tailwind CSS
                  </span>

                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Node.js
                  </span>

                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>

                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Prisma ORM
                  </span>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  Full Stack Software Developer
                </h3>
                <span className="text-sm uppercase tracking-wider  text-purple-600 bg-purple-50 border border-purple-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  (May 2025 – August 2025)
                </span>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-purple-600">
                  ConneXions Global Solutions
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  ACE Project Space, Red River College Polytechnic
                </p>
              </div>

              <p className="text-base leading-relaxed text-gray-700 mb-4">
                I developed core features for a React Native mobile application focused on community safety,
                including redesigning and rebuilding the entire user onboarding experience for standard users and users with elevated permissions.
                I designed the onboarding flow in Figma, then implemented it by building the UI components,
                integrating Twilio-based OTP verification for secure authentication, configuring routing logic,
                and updating the database schema to support multi-tier user roles.
                I also integrated real-time notifications and managed data synchronization with a PostgreSQL (Supabase) backend.
                I focused on delivering reliable system behavior in an Agile environment,
                ensuring the application met the accessibility and security needs of at-risk populations.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-purple-200">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-medium">
                    React Native
                  </span>

                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>

                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-medium">
                    Twilio API
                  </span>

                  <span className="px-3 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs font-medium">
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
