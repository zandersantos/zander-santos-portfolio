import Paragraph from "./ui/Paragraph";
import RoleBadge from "./ui/RoleBadge";
import SectionLabel from "./ui/SectionLabel";
import TechBadge from "./ui/TechBadge";
import Title from "./ui/Title";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex px-10 pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <SectionLabel>
            Projects
          </SectionLabel>

          <div className="space-y-8">
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  CourtFlow
                </Title>
                <RoleBadge>
                  Personal
                </RoleBadge>
              </div>

              <Paragraph>
                Full-stack NBA season and playoff tracker built with Next.js and PostgreSQL.
                Designed a relational database using Prisma ORM to manage teams, players, and
                games while integrating the BallDontLie API for automated data synchronization.
                Implemented season schedules, playoff series tracking, team standings, live game
                scoreboards, filtering, pagination, and server-rendered data fetching with
                responsive user interfaces.
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant="cyan">
                    Next.js
                  </TechBadge>
                  <TechBadge variant="cyan">
                    TypeScript
                  </TechBadge>
                  <TechBadge variant="cyan">
                    PostgreSQL
                  </TechBadge>
                  <TechBadge variant="cyan">
                    Prisma ORM
                  </TechBadge>
                  <TechBadge variant="cyan">
                    Tailwind CSS
                  </TechBadge>
                  <TechBadge variant="cyan">
                    BallDontLie API
                  </TechBadge>
                </div>
              </div>
            </div>
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  Game Store Rental Tracker
                </Title>
                <RoleBadge>
                  Personal
                </RoleBadge>
              </div>

              <Paragraph>
                Spec-driven inventory and rental tracking MVP for tabletop game stores.
                Architected using an end-to-end AI-assisted workflow with Cursor to build
                server-driven category filtering, real-time inventory status management,
                and atomic status updates. Designed a relational schema separating active item
                states from chronological audit logs using Prisma ORM and Supabase PostgreSQL.
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant="cyan">
                    Next.js
                  </TechBadge>
                  <TechBadge variant="cyan">
                    TypeScript
                  </TechBadge>
                  <TechBadge variant="cyan">
                    PostgreSQL
                  </TechBadge>
                  <TechBadge variant="cyan">
                    Supabase
                  </TechBadge>
                  <TechBadge variant="cyan">
                    Prisma ORM
                  </TechBadge>
                  <TechBadge variant="cyan">
                    Tailwind CSS
                  </TechBadge>
                  <TechBadge variant="cyan">
                    Cursor AI
                  </TechBadge>
                </div>
              </div>
            </div>
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  ConneXions Mobile App
                </Title>
                <RoleBadge>
                  Professional - ACE Project Space
                </RoleBadge>
              </div>

              <Paragraph>
                Community safety mobile application with a guardian-protected user system for at-risk populations.
                Architected complete user onboarding flows for both standard users and &quot;Admins&quot;,
                implementing Twilio OTP verification, real-time in-app notifications via Supabase,
                and secure authentication workflows. Built comprehensive user settings including
                password management, profile updates, and account deletion with multi-factor verification.
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant = "cyan">
                    React Native
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    Supabase
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    PostgreSQL
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    Twilio API
                  </TechBadge>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  Evolve Athletics - Mock E-Commerce Platform
                </Title>
                <RoleBadge>
                  Academic
                </RoleBadge>
              </div>

              <Paragraph>
                Full-stack fitness equipment e-commerce store featuring product catalog with category organization,
                session-based shopping cart with CRUD operations, and complete checkout flow with user authentication.
                Built admin dashboard for product management (CRUD), image handling, and dynamic content editing.
                Implemented RESTful routing, MVC architecture, and relational database design with customers,
                products, orders, and order details models.
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant = "cyan">
                    Ruby on Rails
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    PostgreSQL
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    HTML/CSS
                  </TechBadge>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <Title>
                  D&D Monster Manual
                </Title>
                <RoleBadge>
                  Academic
                </RoleBadge>
              </div>

              <Paragraph>
                Interactive monster database with search functionality for monsters, actions, and senses.
                Designed complex relational database schema with junction tables for many-to-many relationships
                between monsters, abilities, and actions. Implemented full-text search across multiple entities,
                RESTful API integration with D&D 5e API, and data migration workflows between SQLite and SQL Server.
              </Paragraph>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge variant = "cyan">
                    Ruby on Rails
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    PostgreSQL
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    HTML/CSS
                  </TechBadge>
                  <TechBadge variant = "cyan">
                    API Integration
                  </TechBadge>
                </div>
              </div>
            </div>
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