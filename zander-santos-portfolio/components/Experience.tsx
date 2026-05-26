import Paragraph from "./ui/Paragraph";
import RoleBadge from "./ui/RoleBadge";
import SectionLabel from "./ui/SectionLabel";
import TechBadge from "./ui/TechBadge";
import Title from "./ui/Title";

const Experience = () => {

  return (
    <section id="experience" className="min-h-screen flex px-10 pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <SectionLabel>
            Experience
          </SectionLabel>
          <div className="space-y-8">
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  Full Stack Software Developer
                </Title>
                <RoleBadge>
                  (August 2025 – May 2026)
                </RoleBadge>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-cyan-600">
                  Confidential Industry Project
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  ACE Project Space, Red River College Polytechnic
                </p>
              </div>

              <Paragraph>
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
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-2">
                  <TechBadge variant = "cyan">
                    React
                  </TechBadge>

                  <TechBadge variant = "cyan">
                    Next.js
                  </TechBadge>

                  <TechBadge variant = "cyan">
                    TypeScript
                  </TechBadge>

                  <TechBadge variant = "cyan">
                    Tailwind CSS
                  </TechBadge>

                  <TechBadge variant = "cyan">
                    Node.js
                  </TechBadge>

                  <TechBadge variant = "cyan">
                    PostgreSQL
                  </TechBadge>

                  <TechBadge variant = "cyan">
                    Prisma ORM
                  </TechBadge>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  Full Stack Software Developer
                </Title>
                <RoleBadge>
                  (May 2025 – August 2025)
                </RoleBadge>
              </div>

              <div className="mb-4">
                <p className="text-lg font-semibold text-purple-600">
                  ConneXions Global Solutions
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  ACE Project Space, Red River College Polytechnic
                </p>
              </div>

              <Paragraph>
                I developed core features for a React Native mobile application focused on community safety,
                including redesigning and rebuilding the entire user onboarding experience for standard users and users with elevated permissions.
                I designed the onboarding flow in Figma, then implemented it by building the UI components,
                integrating Twilio-based OTP verification for secure authentication, configuring routing logic,
                and updating the database schema to support multi-tier user roles.
                I also integrated real-time notifications and managed data synchronization with a PostgreSQL (Supabase) backend.
                I focused on delivering reliable system behavior in an Agile environment,
                ensuring the application met the accessibility and security needs of at-risk populations.
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-purple-200">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant = "purple">
                    React Native
                  </TechBadge>

                  <TechBadge variant = "purple">
                    PostgreSQL
                  </TechBadge>

                  <TechBadge variant = "purple">
                    Twilio API
                  </TechBadge>

                  <TechBadge variant = "purple">
                    Figma
                  </TechBadge>
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
