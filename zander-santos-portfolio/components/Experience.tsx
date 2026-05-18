const Experience = () => {

  return (
    <section id="experience" className="min-h-screen flex pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-md uppercase tracking-[0.2em] font-medium mb-6">
            Experience
          </span>
          <div className="space-y-8">
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-10 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="flex flex-row items-start justify-between mb-4">
                <h3 className="text-xl md:text-3xl font-semibold text-neutral-900">
                  Full Stack Software Developer
                </h3>
                <span className="text-md uppercase tracking-wider text-neutral-500 bg-neutral-100 px-4 py-2 rounded-full">
                  (August 2025 – May 2026)
                </span>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium text-blue-600">
                  Confidential Industry Project
                </p>
                <p className="text-sm text-neutral-500 uppercase tracking-wide">
                  ACE Project Space, Red River College Polytechnic
                </p>
              </div>

              <p className="text-lg leading-7 text-neutral-600 font-light">
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
            </div>

            <div className="border-2 border-neutral-200 rounded-2xl p-10 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl bg-white">
              <div className="flex flex-row items-start justify-between mb-4">
                <h3 className="text-xl md:text-3xl font-semibold text-neutral-900">
                  Full Stack Software Developer
                </h3>
                <span className="text-md uppercase tracking-wider text-neutral-500 bg-neutral-100 px-4 py-2 rounded-full">
                  (May 2025 – August 2025)
                </span>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium text-blue-600">
                  ConneXions Global Solutions
                </p>
                <p className="text-sm text-neutral-500 uppercase tracking-wide">
                  ACE Project Space, Red River College Polytechnic
                </p>
              </div>

              <p className="text-lg leading-7 text-neutral-600 font-light">
                I developed core features for a React Native mobile application focused on community safety,
                including redesigning and rebuilding the entire user onboarding experience for standard users and users with elevated permissions.
                I designed the onboarding flow in Figma, then implemented it by building the UI components,
                integrating Twilio-based OTP verification for secure authentication, configuring routing logic,
                and updating the database schema to support multi-tier user roles.
                I also integrated real-time notifications and managed data synchronization with a PostgreSQL (Supabase) backend.
                I focused on delivering reliable system behavior in an Agile environment,
                ensuring the application met the accessibility and security needs of at-risk populations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
