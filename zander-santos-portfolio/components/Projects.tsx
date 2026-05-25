const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex px-10 pt-20">
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="space-y-12">
          <span className="inline-block px-5 py-2 bg-white text-black rounded-full text-md uppercase tracking-[0.2em] font-bold mb-8">
            Projects
          </span>

          <div className="space-y-8">
            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  ConneXions Mobile App
                </h3>
                <span className="text-sm uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  Professional - ACE Project Space
                </span>
              </div>

              <p className="text-base leading-relaxed text-gray-700 mb-2">
                Community safety mobile application with a guardian-protected user system for at-risk populations.
                Architected complete user onboarding flows for both standard users and &quot;Admins&quot;,
                implementing Twilio OTP verification, real-time in-app notifications via Supabase,
                and secure authentication workflows. Built comprehensive user settings including
                password management, profile updates, and account deletion with multi-factor verification.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <h4 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    React Native
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Supabase
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Twilio API
                  </span>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  Evolve Athletics - Mock E-Commerce Platform
                </h3>
                <span className="text-sm uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  Academic
                </span>
              </div>

              <p className="text-base leading-relaxed text-gray-700 mb-2">
                Full-stack fitness equipment e-commerce store featuring product catalog with category organization,
                session-based shopping cart with CRUD operations, and complete checkout flow with user authentication.
                Built admin dashboard for product management (CRUD), image handling, and dynamic content editing.
                Implemented RESTful routing, MVC architecture, and relational database design with customers,
                products, orders, and order details models.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Ruby on Rails
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    HTML/CSS
                  </span>
                </div>
              </div>
            </div>

            <div className="skill-card bg-white/95 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col flex-row items-start justify-between mb-4 gap-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  D&D Monster Manual
                </h3>
                <span className="text-sm uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-4 py-2 rounded-full whitespace-nowrap font-medium">
                  Academic
                </span>
              </div>

              <p className="text-base leading-relaxed text-gray-700 mb-2">
                Interactive monster database with search functionality for monsters, actions, and senses.
                Designed complex relational database schema with junction tables for many-to-many relationships
                between monsters, abilities, and actions. Implemented full-text search across multiple entities,
                RESTful API integration with D&D 5e API, and data migration workflows between SQLite and SQL Server.
              </p>

              <div className="flex flex-wrap gap-3 items-baseline pt-4 border-t border-cyan-200">
                <p className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    Ruby on Rails
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    HTML/CSS
                  </span>
                  <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full text-xs font-medium">
                    API Integration
                  </span>
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