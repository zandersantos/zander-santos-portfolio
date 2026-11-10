import Image from "next/image";
import Paragraph from "./ui/Paragraph";
import RoleBadge from "./ui/RoleBadge";
import SectionLabel from "./ui/SectionLabel";
import TechBadge from "./ui/TechBadge";
import Title from "./ui/Title";

type Project = {
  title: string;
  role: string;
  description: string;
  stack: string[];
  image?: string;
  live?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: "CourtFlow",
    role: "Personal",
    description:
    `
      Full-stack NBA season and playoff tracker built with Next.js and PostgreSQL.
      Designed a relational database using Prisma ORM to manage teams, players, and games
      while integrating the BallDontLie API for automated data synchronization.
      Implemented season schedules, playoff series tracking, team standings, live game scoreboards,
      filtering, pagination, and server-rendered data fetching with responsive user interfaces.
    `,
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "Prisma ORM", "Tailwind CSS", "BallDontLie API"],
    image: "/projects/CourtFlow2.png",
    live: "https://court-flow-coral.vercel.app/",
    repo: "https://github.com/zandersantos/court-flow.git"
  },
  {
    title: "Game Store Rental Tracker",
    role: "Personal",
    description:
    `
      Spec-driven inventory and rental tracking MVP for tabletop game stores.
      Architected using an end-to-end AI-assisted workflow with Cursor and Claude Code to build
      server-driven category filtering, real-time inventory status management,
      and atomic status updates. Designed a relational schema separating active item
      states from chronological audit logs using Prisma ORM and Supabase PostgreSQL.
    `,
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Prisma ORM", "Tailwind CSS", "Cursor AI", "Claude Code"],
    image: "",
    live: "https://game-store-rental-tracker-jzrh.vercel.app/",
    repo: "https://github.com/zandersantos/game-store-rental-tracker.git"
  },
  {
    title: "ConneXions Mobile App",
    role: "Professional, Work Integrated Placement - ACE Project Space, Red River College Polytechnic",
    description:
    `
      Community safety mobile application with a guardian-protected user system for at-risk populations.
      Architected complete user onboarding flows for both standard users and administrators,
      implementing Twilio OTP verification, real-time in-app notifications via Supabase,
      and secure authentication workflows. Built comprehensive user settings including
      password management, profile updates, and account deletion with multi-factor verification.
    `,
    stack: ["React Native", "Expo", "PostgreSQL", "Supabase", "Twilio API", "Figma"],
    image: "",
    //live: "",
    //repo: ""
  }
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex px-10 pt-20 pb-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <SectionLabel>
            Projects
          </SectionLabel>

          <div className="space-y-8">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="browser-frame">
                    <div className ="flex gap-1.5 px-4 py-3 bg-zinc-900 border-b border-cyan-500/20">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                    </div>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.title}`}
                        width={1600}
                        height={1000}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    ): (
                      <div className="aspect-[16/10] flex items-center justify-center text-sm uppercas tracking-wider text-zinc-500">
                        Sreenshot N/A
                      </div>
                    )}
                  </div>
                </div>
                <div
                  key={p.title}
                  className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                    <Title>
                      {p.title}
                    </Title>
                    <RoleBadge>
                      {p.role}
                    </RoleBadge>
                  </div>

                  <Paragraph>
                    {p.description}
                  </Paragraph>

                  <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                    <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <TechBadge key={tech} variant="cyan">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  </div>
                </div>
               </article>
             ))}
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
              <p className="text-lg font-semibold text-cyan-600 pb-2">
                In Progress
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Currently building projects in JavaScript, React, Next.js, and C#/.NET
                to expand my portfolio with production-ready applications in my primary tech stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;